const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    confirmedEmail: { type: Boolean, required: true },
    salt: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    avatar: { type: String, required: true },
    canPublish: { type: Boolean, required: true },
    notifications: [{ type: { type: String }, body: { type: String } }],
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
