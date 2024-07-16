import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../redux/userauth";

function Comment(props) {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.auth.user);
   console.log(props.id.comments,"lllllllllllllllllllllllllllllllllllllllll");
  const [newComment, setNewComment] = useState("");

  const handleComment = async () => {
    if (!newComment.trim()) return; // Prevent adding empty comments

    // Get current time
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const month = date.getMonth();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const time = `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${
      monthNames[month]
    }`;

    const newCommentObject = {
      time: time,
      // profilepic:responseUser.user.profileBio.profileImg,
      userId:user._id,
      userName:user.userName,
      text: newComment,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/comment",
        newCommentObject
      );
      let updatedata = new Object();
      updatedata.postId = props.id._id;
      updatedata.commentId = response.data.data._id;
      const response2 = await axios.put(
        "http://localhost:5000/updatepostcomment",
        updatedata
      );

      dispatch(toggle());
    } catch (error) {
      console.error("Error updating comments:", error);
    }

    setNewComment(""); // Clear the input field
  };

  return (
    <>
      <div className="card flex flex-col rounded-md border p-2 text-start mt-2 bg-white h-[calc(100vh-22rem)] overflow-y-auto hide-scrollbar dark:bg-slate-900 dark:text-white">
        <div className="search flex gap-3">
          <div className="profile">
            <img
              src={user.profilePicture}
              alt="img"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>
          <div className="flex w-full">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="border border-slate-400 rounded-md outline-none pl-2 w-full dark:bg-slate-900 dark:text-white"
            />
            <button
              className="px-2 bg-blue-500 rounded-md text-white mx-[2px]"
              onClick={handleComment}
            >
              Send
            </button>
          </div>
        </div>
        {props.id.comments.map((comment, index) => (
          <div key={index} className="firstbox flex flex-col justify-between">
            <div className="flex gap-2 items-center">
              <img
                src={comment.userId.profilePicture}
                alt=""
                className="w-4 h-4 rounded-full object-cover"
              />
              <div className="flex flex-col text-start mt-4 leading-[15px] mb-3">
                <span className="items-center text-[10px] font-medium dark:text-white">
                  {comment.userName}
                </span>
                <span className="text-[11px] text-slate-700 dark:text-white">
                  {comment.time}
                </span>
              </div>
            </div>
            <div className="caption text-slate-800 text-[12px]  dark:bg-slate-900 dark:text-white">
              {comment.text}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Comment;
