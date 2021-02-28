const express = require("express");
const mongoose = require("mongoose");
const postRoute = require("./routes/posts");
require("dotenv/config");
const app = express();

// import routes

const authRoute = require("./routes/auth");

// connecting to the database

mongoose
  .connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  )
  .then(() => {
    console.log("connection secure");
  })
  .catch((err) => console.log(err));

// middleware
app.use(express.json());
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);
app.listen(3000, () => {
  console.log("server is running");
});
