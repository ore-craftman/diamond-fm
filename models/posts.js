const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    type: { type: String, required: true },
    featuredDesc: { type: String, required: true },
    audio: String,
    featuredImage: { type: String, required: true },
    createdBy: { type: String, required: true },
    programmeDate: Date,
    pending: { type: Boolean, required: true },
    suggestion: { type: String },
    comments: [
      {
        name: { type: String },
        approved: { type: Boolean },
        email: { type: String },
        body: { type: String },
        avatar: { type: String },
      },
    ],
  },
  { timestamps: true }
);

const Post = mongoose.model("post", postSchema);
module.exports = Post;
