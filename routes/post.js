const express = require("express");
const router = express.Router();
const postService = require("../services/post");

// Get all post /posts/
router.get("/", async (req, res) => {
  posts = await postService.getAllPosts();
  if (posts[0]) {
    res.json({ status: true, posts: posts[1] });
  } else {
    res.json({ status: false, message: posts[1] });
  }
});

// Create new post, POST /posts/create
router.post("/create", async (req, res) => {
  const {
    title,
    body,
    type,
    createdBy,
    featuredImage,
    programmeDate,
    featuredDesc,
    pending,
  } = req.body;

  postData = {
    title,
    body,
    type,
    featuredImage,
    featuredDesc,
    createdBy,
    audio: req.body.audio ? req.body.audio : null,
    programmeDate,
    pending,
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
router.post("/update", async (req, res) => {
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
    featuredImage,
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
