require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use(morgan("combined"));

// Routes
const usersRoutes = require("./routes/user");
const postsRoutes = require("./routes/post");
const clientRoutes = require("./routes/client");

app.use("/posts", postsRoutes);
app.use("/users", usersRoutes);

// Serve react build on production
if (process.env.NODE_ENV === "production") {
  app.use("/", clientRoutes);

  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API running");
  });
}
