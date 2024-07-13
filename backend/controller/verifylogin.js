const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const userModel = require('../model/user');

const login= async (req,res)=>{
    const data=req.body
       try{
        const user= await userModel.findOne({userName:data.userName});
        if(user!==null){

         bcrypt.compare(data.password,user.password,(err,success)=>{
            if(success==true){
             jwt.sign({userName:data.userName},"Masoomkey",(err,token)=>{
                if(!err){
                 res.send({message:"Login successfully",token:token,user:user})
                }else{
                    console.log(err)
                }
             })
            }else{
                res.status(403).send({message:"wrong password"})
            }
         })   

        }else{
            res.status(404).send({message:"user not found "})
        }
       
       }catch(err){
        res.status(500).send({ message: 'some problem', err }); }
}
module.exports=login