// register controller
const userModel=require('../model/user')
const bcrypt=require('bcryptjs')
const register=  (req,res)=>{
 const data=req.body;
    bcrypt.genSalt(10,(err,salt)=>{
      if(!err){
        bcrypt.hash(data.password,salt,async (err,hpass)=>{
         if(!err){
          data.password=hpass
          try{
          const doc= await userModel.create(data);
          res.status(201).send({message:'data register successfully'})
        }catch(err){
            res.status(500).send({ message: 'Error registering data', err }); }

         }
        })
      }
    })  
}
module.exports=register;