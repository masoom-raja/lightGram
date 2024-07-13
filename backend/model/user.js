const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    default: "",
  },
  bio: {
    type: String,
    default: "",
  },
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
},{timestapms:true});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
