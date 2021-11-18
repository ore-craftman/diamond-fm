const bcrypt = require("bcrypt");
const client = require("../db-connection");
const { ObjectId } = require("mongodb");

const create = async (
  firstname,
  lastname,
  email,
  password,
  role,
  avatar,
  canPublish
) => {
  const hashSalt = await bcrypt.genSalt(10);
  await client.connect();
  // Select collection
  const userCollection = client.db("diamond_fm").collection("users");
  try {
    const oldUser = await userCollection.findOne({ email: email });
    if (oldUser) {
      return [false, "Account with email exists"];
    } else {
      const currentDate = new Date();
      const userData = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        confirmedEmail: false,
        salt: hashSalt,
        password: await bcrypt.hash(password, hashSalt),
        role: role,
        avatar: avatar,
        canPublish,
        notifications: [],
        createdAt: currentDate.toISOString(),
      };

      const response = await userCollection.insertOne(userData);

      if (!response.acknowledged) {
        return [false, "Oops!! seems account with email exists"];
      } else {
        const user = await userCollection.findOne({ _id: response.insertedId });
        return [true, user];
      }
    }
  } catch (err) {
    console.log(err);
    // return [false, "Oops!! seems account with email exists"];
  }
};

const authenticate = async (email, password) => {
  try {
    await client.connect();

    // Select collection
    const userCollection = client.db("diamond_fm").collection("users");
    const user = await userCollection.findOne({ email: email });

    if (!user) {
      return [false, "Email not registered"];
    } else {
      const passwordHash = await bcrypt.hash(password, user.salt);

      if (user.password == passwordHash) {
        return [true, user];
      } else {
        return [false, "Wrong password"];
      }
    }
  } catch (err) {
    console.log(err);
    return [false, "Error authenticating user"];
  }
};

const getAllUsers = async () => {
  try {
    await client.connect();

    // Select collection
    const userCollection = client.db("diamond_fm").collection("users");
    const users = await userCollection.find({}).toArray();

    if (users.length > 0) {
      return [true, users];
    } else {
      return [false, "No data to retrieve"];
    }
  } catch (err) {
    console.error(err);
  }
};

const getById = async (id) => {
  try {
    const doc_id = new ObjectId(id);
    await client.connect();

    // Select collection
    const userCollection = client.db("diamond_fm").collection("users");
    const user = await userCollection.findOne({ _id: doc_id });
    if (user) {
      return [true, user];
    } else {
      return [false, "No user with the specified id"];
    }
  } catch (err) {
    return [false, "No user with the specified id"];
  }
};

const getByEmail = async (email) => {
  await client.connect();

  // Select collection
  const userCollection = client.db("diamond_fm").collection("users");
  const user = await userCollection.findOne({ email: email });

  if (!user) {
    return [false, "Account not found"];
  } else {
    return [true, user];
  }
};

const updateData = async (id, data) => {
  const doc_id = new ObjectId(id);
  await client.connect();

  // Select collection
  const userCollection = client.db("diamond_fm").collection("users");
  const updated = await userCollection.updateOne(
    { _id: doc_id },
    { $set: data },
    { upsert: true }
  );

  // const updated = await User.updateOne({ _id: id }, data);
  if (updated.modifiedCount > 0) {
    return [true, "User updated successfully"];
  } else {
    return [false, "Error updating user"];
  }
};

const updatePassword = async (id, newPassword) => {
  await client.connect();

  // Select collection
  const userCollection = client.db("diamond_fm").collection("users");
  const doc_id = new ObjectId(id);
  const user = await userCollection.findOne({ _id: doc_id });

  if (!user) {
    return [false, "No user with the specified id"];
  } else {
    const hashSalt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(newPassword, hashSalt);

    const updated = await userCollection.updateOne(
      { _id: doc_id },
      { $set: { salt: hashSalt, password: passwordHash } },
      { upsert: true }
    );

    if (updated.modifiedCount > 0) {
      return [true, "Password updated successfully"];
    } else {
      return [false, "Error updating password"];
    }
  }
};

const deleteUser = async (id) => {
  try {
    const doc_id = new ObjectId(id);
    await client.connect();

    // Select collection
    const userCollection = client.db("diamond_fm").collection("users");
    await userCollection.deleteOne({ _id: doc_id });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  create,
  updateData,
  authenticate,
  updatePassword,
  getAllUsers,
  getById,
  getByEmail,
  deleteUser,
};
