const Post = require('../model/post');
const User = require('../model/user'); // Ensure this is imported if needed elsewhere

const getPost = async (req, res) => {
  try {
    
    const populatedPosts = await Post.find()
  .populate("user")
  .populate({
    path: "comments",
    populate: {
      path: "userId",
      model: "users" // Ensure you specify the model name if necessary
    }
  });
    res.send({ message: populatedPosts.reverse() });
  } catch (err) {
    console.log(err)
    res.status(500).send({ message: "some problem", err: err });
  }
};

module.exports = getPost;
