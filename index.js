require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const port = process.env.PORT || 4000;

app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
    limit: "500mb",
  })
);
app.use(express.json({ limit: "500mb" }));
app.use(express.static("media"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));

app.use(morgan("combined"));

// Routes
const usersRoutes = require("./routes/user");
const postsRoutes = require("./routes/post");

app.use("/posts", postsRoutes);
app.use("/users", usersRoutes);
