const userModel = require('../model/user');

const editProfile = async (req, res) => {
  const { bio, user } = req.body;
  const imageUrl = req.file ? req.file.path : null;

  console.log(imageUrl);
  console.log("user id ", user);
  console.log("bio", bio);
  
  if (!imageUrl) {
    return res.status(400).send({ message: 'Image upload failed' });
  }

  // const result = await cloudinary.uploader.upload(req.file.path);

  try {
    const updatedPost = await userModel.findByIdAndUpdate(
      user,
      { 
        $set: { 
          profilePicture: imageUrl,
          bio: bio 
        }
      },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = editProfile;
