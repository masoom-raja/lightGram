import React from "react";
import Post from "./post";
import { useState,useEffect } from "react";
import { useSelector } from 'react-redux';
import axios from "axios";

function Posts(){
 
  const user= useSelector((state) => state.auth.toggle);
const [post,setpost]=useState([])
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/post');
      setpost(response.data.message);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  fetchData();
}, [user]);
    
    return(
        <div className="post">
            {
                post.map((posts)=>(< Post post={posts} id={posts.id} />))
            }
        </div>
    )
}
export default Posts