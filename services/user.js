const User = require("../models/users");
const bcrypt = require("bcrypt");

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
  try {
    if (await User.exists({ email: email })) {
      return [false, "Account with email exists"];
    } else {
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
      };

      const user = await User.create(userData);
      if (user) {
        return [true, user];
      } else {
        return [false, "Oops!! seems account with email exists"];
      }
    }
  } catch (err) {
    console.log(err);
    // return [false, "Oops!! seems account with email exists"];
  }
};

const authenticate = async (email, password) => {
  try {
    const user = await User.findOne({ email: email });
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
    const users = await User.find({});
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
    const user = await User.findById(id).exec();
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
  const user = await User.findOne({ email: email });
  if (!user) {
    return [false, "Account not found"];
  } else {
    return [true, user];
  }
};

const updateData = async (id, data) => {
  const updated = await User.updateOne({ _id: id }, data);
  if (updated.modifiedCount > 0) {
    return [true, "User updated successfully"];
  } else {
    return [false, "Error updating user"];
  }
};

const updatePassword = async (id, newPassword) => {
  const user = await User.findOne({ _id: id });

  if (!user) {
    return [false, "No user with the specified id"];
  } else {
    const hashSalt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(newPassword, hashSalt);

    const passwordUpdated = await User.updateOne(
      { _id: id },
      { salt: hashSalt, password: passwordHash }
    );

    if (passwordUpdated.modifiedCount > 0) {
      return [true, "Password updated successfully"];
    } else {
      return [false, "Error updating password"];
    }
  }
};

const deleteUser = async (id) => {
  try {
    await User.findByIdAndDelete(id);
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
