const Post = require('../model/post');

const post = async (req, res) => {
  const { caption, user, likes, comments } = req.body;
  const imageUrl = req.file ? req.file.path : null;

  console.log(imageUrl)
  console.log("caption",typeof(caption))
  console.log("user id ",user)
  console.log("likes",likes)
  console.log("comments",comments)
  

  if (!imageUrl) {
    return res.status(400).send({ message: 'Image upload failed' });
  }


  // const result = await cloudinary.uploader.upload(req.file.path);
  const postData = {
    user,
    imageUrl,
    caption,
    likes: likes ? JSON.parse(likes) : [],
    comments: comments ? JSON.parse(comments) : []
  };

  try {
    const doc = await Post.create(postData);
    res.status(200).send({ message: 'Post successfully created', data: doc });
  } catch (err) {
    res.status(500).send({ message: 'Some problem occurred', error: err });
  }
};

module.exports = post;
