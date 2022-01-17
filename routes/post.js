const express = require("express");
const router = express.Router();
const postService = require("../services/post");
const multer = require("multer");

// Multer Storage
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "uploads/");
  },

  // add back image extention
  filename: function (req, file, callback) {
    const name = file.originalname.split(" ").join("");
    callback(null, Date.now() + name);
  },
});

// Upload params for Multer
const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 1023 * 1023 * 3,
  },
});

// Get all post /posts/
router.get("/", async (req, res) => {
  posts = await postService.getAllPosts();
  if (posts && posts[0]) {
    res.json({ status: true, posts: posts[1] });
  } else {
    res.json({ status: false, message: posts[1] || "Error retrieving posts" });
  }
});

// Create new post, POST /posts/create
router.post("/create", upload.single("featuredImage"), async (req, res) => {
  const { title, body, type, createdBy, programmeDate, featuredDesc, pending } =
    req.body;

  const currentDate = new Date();
  postData = {
    title,
    body,
    type,
    featuredImage: "/" + req.file.filename,
    featuredDesc,
    createdBy,
    audio: req.body.audio ? req.body.audio : null,
    programmeDate,
    pending,
    comments: [],
    createdAt: currentDate.toISOString(),
  };

  const post = await postService.create(postData);

  if (!post[0]) {
    res.json({ status: false, message: post[1] });
  } else {
    res.json({ status: true, post: post[1] });
  }
});

// get a post by id, /posts/:id
router.get("/single/:id", async (req, res) => {
  const post = await postService.getById(req.params.id);
  if (post[0]) {
    res.json({ status: post[0], post: post[1] });
  } else {
    res.json({ status: post[0], message: post[1] });
  }
});

// Get posts by type, /posts/:type
router.get("/type/:type", async (req, res) => {
  const posts = await postService.getByType(req.params.type);

  if (!posts[0]) {
    res.json({ status: false, message: posts[1] });
  } else {
    res.json({ status: true, posts: posts[1] });
  }
});

// Post comment
router.post("/add-comment", async (req, res) => {
  const { id, comments } = req.body;

  const dataUpdated = await postService.updatePost(id, { comments });

  if (dataUpdated[0]) {
    res.json({ status: true, message: "Added" });
  } else {
    res.json({ status: false, message: "Error adding comment" });
  }
});

// Update post
router.post("/update", upload.single("featuredImage"), async (req, res) => {
  const {
    id,
    title,
    body,
    type,
    featuredImage,
    featuredDesc,
    createdBy,
    audio,
    programmeDate,
    pending,
    comments,
  } = req.body;

  const dataUpdated = await postService.updatePost(id, {
    title,
    body,
    type,
    featuredImage: req.file ? "/" + req.file.filename : featuredImage,
    featuredDesc,
    createdBy,
    audio,
    programmeDate,
    pending,
    suggestion: req.body.suggestion ? req.body.suggestion : null,
  });

  if (dataUpdated[0]) {
    res.json({ status: true, message: "Updated" });
  } else {
    res.json({ status: false, message: "Error updating post" });
  }
});

// Delete a post /posts/:id
router.delete("/:id", async (req, res) => {
  const post = await postService.getById(req.params.id);
  if (post && post[0]) {
    await postService.deletePost(req.params.id);
    res.json({ status: true, message: `Post deleted` });
  } else {
    res.json({ status: false, message: `Post does not exit` });
  }
});

module.exports = router;
