const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PostSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "users", required: true },
    imageUrl: { type: String, required: true },
    caption: { type: String, default: "" },
    likes: [{ type: Schema.Types.ObjectId, ref: "User" ,default:"1000"}],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" ,default:"awesome"}],
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
