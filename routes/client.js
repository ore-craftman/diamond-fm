const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const postService = require("../services/post");

const filePath = path.resolve(__dirname, "../client/build", "index.html");

router.get("/posts/:id", async (req, res) => {
  const { id } = req.params;

  const post = await postService.getById(id);
  if (post[0]) {
    fs.readFile(filePath, "utf8", function (err, data) {
      if (err) {
        return console.log(err);
      }

      // replace the special strings with server generated strings
      data = data.replace(
        /\$OG_TITLE/g,
        `${post[1].title.slice(0, 20) + "... | DiamondFM"}`
      );
      data = data.replace(
        /\$OG_DESCRIPTION/g,
        `${post[1].featuredDesc.slice(0, 45) + "... | DiamondFM"}`
      );
      // result = data.replace(/\$OG_IMAGE/g, post[1].featuredImage);
      return res.send(data);
    });
  } else {
    res.json({ status: post[0], message: post[1] });
  }
});

module.exports = router;
