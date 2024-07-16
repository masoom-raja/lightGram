const chatmodel=require('../model/groupchats')

const getchat=async (req,res)=>{
    try{ 
   const chat = await chatmodel.find().populate("user")
    res.status(200).send({message:"get successfully",data:chat})
}catch(err){
    console.log(err)
    res.status(500).send({message:err})
}
}

const createchat = async (req, res) => {
    const doc=req.body
    console.log(doc);
    try {
        const response = await chatmodel.create(doc);
        res.status(201).send({ message: "Chat created successfully", data: response });
    } catch (err) {
        console.error("Error creating chat:", err);
        res.status(500).send({ message: "An error occurred while creating the chat", error: err.message });
    }
};

module.exports={getchat,createchat}