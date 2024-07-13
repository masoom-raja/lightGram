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

const createchat=async (req,res)=>{
    const doc=req.body;
    try{
     const response= await chatmodel.create(doc)
     res.status(201).send({message:"successfully",data:response})
    }catch(err){
        res.status(500).send("some issue",err)
    }
}
module.exports={getchat,createchat}