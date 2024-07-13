const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
const register = require('./controller/index');
const verifylogin = require('./controller/verifylogin');
const post = require('./controller/post');
const multer = require('multer');
const path = require('path');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./config/cloudinary');
const getpost = require("./controller/getpost");
const createcomment = require("./controller/createcomment");
const updatepostcomment = require("./controller/updatepostcomment");
const editprofile = require("./controller/editprofile");
const getuser = require("./controller/getuser");
const updateuser=require('./controller/updateuser')
const updatepost=require('./controller/updatePost');
const verifytoken = require("./controller/verifytoken");
const deletepost = require("./controller/deletepost");
const { createchat, getchat } = require("./controller/chat");
const PORT = process.env.PORT || 5000;
require('dotenv').config();

app.use(express.json());
app.use(cors());

// Cloudinary storage configuration
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads',
    allowed_formats: ['jpg', 'png'],
  },
});

// Multer configuration
const upload = multer({ storage: storage, limits: { fileSize: 1024 * 1024 * 10 } });
app.put('/updatepost',updatepost)
app.post('/post', upload.single("imageUrl"), post);
app.put('/editprofile',upload.single("imageUrl"),editprofile);
app.put('/updatepost',updatepost)
app.get('/post',getpost);
app.delete('/deletepost/:id',deletepost)
app.get('/user',getuser)
app.put('/updateuser',updateuser)
app.put('/updatepostcomment',updatepostcomment)
app.post('/comment',createcomment)
app.post("/register", register);
app.post("/login", verifylogin);
app.post("/chat",createchat);
app.get("/getchat",getchat)

app.use(function (err, req, res, next) {
  console.log('This is the invalid field ->', err.field)
  next(err)
})

mongoose
  .connect("mongodb://localhost:27017/LightGram")
  .then(() => console.log("db connected successfully..."))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log("server is up and running..."));
