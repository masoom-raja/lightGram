import React, { useState } from "react";
import axios from "axios";
import Comment from "../pages/comment/comment";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import { TiDelete } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { MdAutoAwesome } from "react-icons/md";
import { toggle } from "../redux/userauth";

function Post(props) {
  const {user} = useSelector((state) => state.auth.user);
  const [postLikes, setPostLikes] = useState(Array.from(props.post.likes));
  const [like, setLike] = useState(postLikes.includes(user._id));
  const [openComment, setOpenComment] = useState(false);
  const usedispatch=useDispatch()
  let checkpost=false;
  // console.log(props.post.user._id)
  // console.log(user._id)
  if(user._id===props.post.user._id){
    checkpost=true;
  }else{
    checkpost=false;
  }
  // console.log(checkpost,"post matching to user")
 
  const containerStyle = {
    width: "100%",
    height: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    maxWidth: "100%",
  };

  const handleLike = async (e) => {
    e.preventDefault();
    const updatedLikes = like
      ? postLikes.filter((id) => id !== user._id)
      : [...postLikes, user._id];

    setLike(!like);
    setPostLikes(updatedLikes);

    const newPost = { ...props.post, likes: updatedLikes };
    try {
      await axios.put("http://localhost:5000/updatepost", newPost);
      // console.log(newPost, like ? "after dislike." : "after like.");
    } catch (err) {
      console.log(err);
    }
  };

  const toggleComments = () => {
    setOpenComment(!openComment);
  };

  const handleDelete=async(postid)=>{
    try {
    if(confirm("do you really want to delete this post")==false){
      return
    }else{
      
     const response = await axios.delete(`http://localhost:5000/deletepost/${postid._id}`);
      // console.log(response.data);
      usedispatch(toggle())
    }
      // Optionally, you can update the state to remove the deleted post from the UI
  } catch (error) {
      console.error('There was an error deleting the post!', error);
  }
  }

  return (
    <div style={containerStyle}>
      <div className="card flex flex-col rounded-md border p-2 text-start mb-2 bg-white dark:bg-slate-900 dark:text-white max-w-full">
        <div className="firstbox flex justify-between">
          <div className="flex gap-2 items-center ">
            <div className="profile">
              <img
                src={props.post.user.profilePicture}
                alt="img"
                className="w-8 h-8 rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col text-start mt-4 leading-[15px] mb-3">
              <span className="items-center text-[15px] font-bold">
                {props.post.user.userName}
              </span>
              <span className="text-[11px] text-slate-700 dark:text-white">
                {props.post.user.createdAt}
              </span>
            </div>
          </div>
          {checkpost? <button className="text-2xl font-bold mr-2" onClick={(e)=>handleDelete(props.post)}><TiDelete/></button>:<MdAutoAwesome style={{marginRight:"8px",marginTop:"8px",fontSize:"20px"}}/>}
        </div>

        <div className="caption text-slate-800 text-[15px] my-3 dark:bg-slate-900 dark:text-white">
          {props.post.caption}
        </div>

        <div className="post">
          <img
            src={props.post.imageUrl}
            alt=""
            className="max-h-80 w-full object-cover rounded-md"
          />
        </div>
        <div className="info mt-1 ml-2 flex gap-6">
          <div className="item flex gap-1">
            <button onClick={handleLike}>
              {like ? (
                <FavoriteSharpIcon style={{ color: "red" }} />
              ) : (
                <FavoriteBorderSharpIcon />
              )}
            </button>
            <span className="flex md:gap-4">
              {postLikes.length} <p className="hidden md:block">people like it</p>
            </span>
          </div>

          <div className="item flex gap-1">
            <button onClick={toggleComments} className="flex gap-2 justify-center text-center">
              <ChatRoundedIcon />
              <span>comment</span>
            </button>
            
          </div>
          <div className="item flex gap-1">
            <button>
              <ShareRoundedIcon />
            </button>
            <span>share</span>
          </div>
        </div>
        {openComment ? <Comment id={props.post} /> : <div></div>}
      </div>
    </div>
  );
}

export default Post;
