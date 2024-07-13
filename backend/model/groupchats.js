const mongoose=require('mongoose')

const chatschema=mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId, ref: 'users', required: true},
    message:{type:String,required:true}
})
const chat=mongoose.model('chats',chatschema);
module.exports = chat;