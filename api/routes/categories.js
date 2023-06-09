const router = require("express").Router();
const Category = require("../models/Category");
const Catergory = require("../models/Category");

//create new category
router.post("/", async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
