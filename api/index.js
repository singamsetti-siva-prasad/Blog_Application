const express = require("express");
const app = express();

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const morgan = require("morgan");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const blogsRoute = require("./routes/blogs");
const categoriesRoute = require("./routes/categories");

dotenv.config();
app.use(express.json());
app.use(morgan("tiny"));

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to db"))
  .catch((err) => {
    console.log(err);
  });

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/blogs", blogsRoute);
app.use("/api/categories", categoriesRoute);

app.listen("3000", () => {
  console.log("listening to port 3000");
});
