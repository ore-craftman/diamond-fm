require("dotenv").config();
const express = require("express");
const app = express();
const client = require("./db-connection");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

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

// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => {
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
//   })
//   .catch((err) => console.log(err));

app.get("/test", async (req, res) => {
  await client.connect();

  // Select collection
  const postCollection = client.db("diamond_fm").collection("posts");

  const post = await postCollection.find({}).toArray();
  // const post = await postCollection.findOne({
  //   title: "Now named air Prog",
  // });

  res.json({ post });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use(morgan("combined"));

// Routes
const usersRoutes = require("./routes/user");
const postsRoutes = require("./routes/post");

app.use("/posts", postsRoutes);
app.use("/users", usersRoutes);

// Serve react build on production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API running");
  });
}
