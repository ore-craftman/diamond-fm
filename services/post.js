const Post = require("../models/posts");
const client = require("../db-connection");

// Post data should be an object of{
//   title: postTitle,
//   type: postType,
//   body: postBody,
//   featuredDesc
//   audio: audioLink,
//   createdBy: user,
//   programmeDate,
//   pending: userCanPublish ? false : true,
//   featuredImage,
// }
// Non applicable feeds should be set to null
const create = async (data) => {
  try {
    const post = await Post.create(data);
    if (!post) {
      return [false, "Error creating post"];
    } else {
      return [true, post];
    }
  } catch (err) {
    console.error(err);
    return [false, "Error creating post"];
  }
};

const getAllPosts = async () => {
  try {
    await client.connect();

    // Select collection
    const postCollection = client.db("diamond_fm").collection("posts");
    const posts = await postCollection.find({}).toArray();

    // const posts = await Post.find({}).lean();
    if (posts.length > 0) {
      return [true, posts];
    } else {
      return [false, "No data to retrieve"];
    }
  } catch (err) {
    console.error(err);
  }
};

// Data == object of the new data
const updatePost = async (id, data) => {
  try {
    const updated = await Post.updateOne({ _id: id }, data);
    if (updated.modifiedCount > 0) {
      return [true, "post updated successfully"];
    } else {
      return [false, "Error updating post"];
    }
  } catch (err) {
    console.error(err);
    return [false, "Error updating post"];
  }
};

const deletePost = async (id) => {
  try {
    await Post.findByIdAndDelete(id);
  } catch (err) {
    console.error(err);
  }
};

const getById = async (id) => {
  try {
    try {
      const post = await Post.findById(id).exec();
      if (post) {
        return [true, post];
      } else {
        return [false, "No post with the specified id"];
      }
    } catch (err) {
      return [false, "No user with the specified id"];
    }
  } catch (err) {
    console.error(err);
    return [false, "Error fetching post"];
  }
};

const getByType = async (type) => {
  try {
    const posts = await Post.find({ type: type }).lean();

    if (!posts || posts.length < 1) {
      return [false, "No post with the specified type"];
    } else {
      return [true, posts];
    }
  } catch (err) {
    console.error(err);
    return [false, "Error fetching post"];
  }
};

module.exports = {
  create,
  updatePost,
  deletePost,
  getAllPosts,
  getById,
  getByType,
};
