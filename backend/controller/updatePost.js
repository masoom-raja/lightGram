const postModel = require('../model/post');

const updatePost = async (req, res) => {
  const doc = req.body;
  console.log(doc);
  console.log(doc._id);

  if (!doc._id) {
    return res.status(400).send('Post ID is required');
  }

  try {
    const updatedDoc = await postModel.findOneAndUpdate({ _id: doc._id }, doc, { new: true });
    
    if (!updatedDoc) {
      return res.status(404).send('Post not found');
    }

    console.log(updatedDoc);
    res.status(200).json(updatedDoc);
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).send('Server Error');
  }
};

module.exports = updatePost;
