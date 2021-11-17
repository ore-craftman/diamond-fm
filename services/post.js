const Post = require("../models/posts");
const client = require("../db-connection");
const { ObjectId } = require("mongodb");

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
    await client.connect();
    // Select collection
    const postCollection = client.db("diamond_fm").collection("posts");
    const response = await postCollection.insertOne(data);

    if (!response.acknowledged) {
      return [false, "Error creating post"];
    } else {
      const post = await postCollection.findOne({ _id: response.insertedId });
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
    if (posts && posts.length > 0) {
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
    const doc_id = new ObjectId(id);
    await client.connect();

    // Select collection
    const postCollection = client.db("diamond_fm").collection("posts");
    const updated = await postCollection.updateOne(
      { _id: doc_id },
      { $set: data },
      { upsert: true }
    );

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
    const doc_id = new ObjectId(id);
    await client.connect();

    // Select collection
    const postCollection = client.db("diamond_fm").collection("posts");
    const deleted = await postCollection.deleteOne({ _id: doc_id });

    console.log(deleted);
  } catch (err) {
    console.error(err);
  }
};

const getById = async (id) => {
  try {
    try {
      const doc_id = new ObjectId(id);
      await client.connect();

      // Select collection
      const postCollection = client.db("diamond_fm").collection("posts");
      const post = await postCollection.findOne({ _id: doc_id });

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
    // const posts = await Post.find({ type: type }).lean();

    await client.connect();

    // Select collection
    const postCollection = client.db("diamond_fm").collection("posts");
    const posts = await postCollection.find({ type: type }).toArray();

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
