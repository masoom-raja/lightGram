const userModel = require('../model/user');

const updateUser = async (req, res) => {
  const doc = req.body;
  console.log(doc);
  console.log(doc._id);

  try {
    // Use doc._id instead of doc.id if your _id field is provided in the body
    const updatedDoc = await userModel.findOneAndUpdate({ _id: doc._id }, doc, { new: true });

    if (!updatedDoc) {
      return res.status(404).send('User not found');
    }

    console.log(updatedDoc);
    res.status(200).json(updatedDoc);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

module.exports = updateUser;
