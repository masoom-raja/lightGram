const postModel = require('../model/post');

const deletePost = async (req, res) => {
    const postid = req.params.id; // Extract post ID from URL parameters
    console.log(postid);

    try {
        const response = await postModel.findByIdAndDelete(postid);

        if (!response) {
            return res.status(404).json({ message: 'Post not found' });
        }

        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = deletePost;
