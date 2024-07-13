const commnetModel=require('../model/comment')


const createcomment= async(req,res)=>{
    let doc=req.body;
    try{
      let response=await commnetModel.create(doc);
      res.status(201).send({message:"created successfully",data:response});
    }catch(err){
        console.log(err)
        res.status(500).send({message:err})
    }
}
module.exports=createcomment;