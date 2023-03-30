const User = require("../models/User");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

//Update
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

//delete
router.delete("/:id", async (req, res) => {
  try {
    if (req.body.userId === req.params.id) {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("user has been deleted");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//get user
router.get("/:id", async (req, res) => {
  try {
    if (req.body.userId === req.params.id) {
      const user = await User.findById(req.params.id);
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
