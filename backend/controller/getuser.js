const userModel=require('../model/user')

const getuser=async(req,res)=>{
    try{
  const user=await userModel.find();
  res.status(200).send({message:"user got successfully",data:user})

    }catch(err){
    res.status(500).send({message:"some problem",err:err})
    }
}
module.exports=getuser