const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  userName: { type: String, required: true },
  text: { type: String, required: true },
  time: { type: String },
  userId: { type: Schema.Types.ObjectId, ref: "users", required: true }
}, { timestamps: true });

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;
