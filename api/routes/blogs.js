const router = require("express").Router();
const Blog = require("../models/Blog");

//Create Blog
router.post("/", async (req, res) => {
  try {
    const newBlog = await Blog(req.body);
    const savedBlog = await newBlog.save();
    res.status(200).json(savedBlog);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update blog
router.put("/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  try {
    if (blog.username === req.body.username) {
      const updatedBlog = await Blog.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(200).json(updatedBlog);
    } else {
      res.status(403).json({ message: "You can't update this blog" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete blog
router.delete("/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  try {
    if (blog.username === req.body.username) {
      await Blog.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Blog deleted successfully" });
    } else {
      res.status(403).json({ message: "You can't delete this blog" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//get blog
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json;
  }
});

//get all blogs
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let blogs;
    if (username) {
      blogs = await Blog.find({ username });
      res.status(200).json(blogs);
    } else if (catName) {
      blogs = await Blog.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      blogs = await Blog.find();
    }
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
