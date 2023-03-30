const mongoose = require("mongoose");

//create user schema?
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // profilepic: {
    //   type: String,
    //   default:
    //     "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dprofile&psig=AOvVaw3Q8v9RjzkPxoiTKwU-IDwt&ust=1675825475013000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKjCwsO2gv0CFQAAAAAdAAAAABAE",
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
