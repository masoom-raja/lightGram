const postModel=require('../model/post')

const updatepostcomment= async(req,res)=>{
    const {postId,commentId}=req.body
    try {
        const updatedPost = await postModel.findByIdAndUpdate(
          postId,
          { $push: { comments: commentId } },
          { new: true }
        );
    
        if (!updatedPost) {
          return res.status(404).json({ message: "Post not found" });
        }
    
        res.status(200).json(updatedPost);
      } catch (error) {
        res.status(500).json({ message: "Server error", error });
      }
    
}
module.exports=updatepostcomment;