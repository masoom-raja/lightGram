import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, profile, toggle } from "../../redux/userauth";

function Rightbar() {
    const darkmode = useSelector((state) => state.theme.darkmode);
    const {user} = useSelector((state) => state.auth.user);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [followdata, setfollowdata] = useState([]);
    const [userdata, setuserdata] = useState([]);
    // console.log("user rightbar...", user.following);
     
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/user');
          const responsedata = Array.from(response.data.data);
          // console.log(responsedata);
          const newdata = responsedata.filter((users) => users._id !== user._id);
          const data = Array.from(newdata);
          // console.log(data, "newdaa");
          const userfollowing = Array.from(user.following);
          // console.log(userfollowing);
          const filteredUsers = data.filter(user => userfollowing.includes(user._id));
          // console.log(filteredUsers, "filter............................");
          setfollowdata(filteredUsers);
          const notInBoth = data.filter(user => !userfollowing.includes(user._id)).concat(userfollowing.filter(id => !data.some(user => user._id === id)));
          // console.log(notInBoth, "not in both");
          setuserdata(notInBoth);
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      };
    
      fetchData();
  
    }, [user.following]);

    const handleFollowClick = async (frienduser, e) => {
      e.preventDefault();
      // console.log(frienduser); // This will log the userName to the console
      const newuser = { ...user, following: [...user.following, frienduser._id] };
      const newuser1 = { ...frienduser, followers: [...frienduser.followers, user._id] };
      
      try {
        await axios.put('http://localhost:5000/updateuser', newuser);
        await axios.put('http://localhost:5000/updateuser', newuser1);
        // console.log(newuser, "after pushing");
        let data = localStorage.getItem("token");
        data=JSON.parse(data)
        dispatch(login({user:newuser, token:data.token}));
        localStorage.setItem("token", JSON.stringify({user:newuser, token:data.token}));
        dispatch(toggle())
        dispatch(profile(newuser1));
        localStorage.setItem('profile', JSON.stringify(newuser1));
      } catch (err) {
        console.log(err);
      }
    };


    const handleUnFollowClick = async (frienduser, e) => {
      e.preventDefault();
      // console.log(frienduser._id); // This will log the userName to the console
      const newuser = { 
        ...user, 
        following: user.following.filter(followingId => followingId !== frienduser._id) 
      };
      const newuser1={ 
       ...frienduser,followers:frienduser.followers.filter(followersid=>followersid!=user._id)
      }
// console.log(newuser,"unfollowing successfully")  
// console.log(newuser1,"unfollowing1 successfully")      

      try {
        await axios.put('http://localhost:5000/updateuser', newuser);
        await axios.put('http://localhost:5000/updateuser', newuser1);
        // console.log(newuser, "after unfollowing.");
        let data = localStorage.getItem("token");
        data=JSON.parse(data)
        dispatch(login({user:newuser, token:data.token}));
        localStorage.setItem("token", JSON.stringify({user:newuser, token:data.token}));
        dispatch(profile(newuser1));
        localStorage.setItem('profile', JSON.stringify(newuser1));
      } catch (err) {
        console.log(err);
      }
    };
    const handleProfileClick = (frienduser, e) => {
      e.preventDefault();
      console.log(frienduser,"profileClick")
      dispatch(profile(frienduser));
      localStorage.setItem('profile', JSON.stringify(frienduser));
      dispatch(toggle())
      navigate('/profilefriend');
    };

    return (
      <div className={darkmode ? 'dark' : ''}>
        <div className=" Rightbar flex-3 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto hide-scrollbar bg-slate-100 dark:bg-slate-900 dark:text-white hidden sm:block">
          <div className="items1 p-4 mx-auto max-w-md ">
            <div className="w-80 shadow-2xl ">
              <div className="container1 px-3 text-start p-2 mt-2 text-slate-700 bg-white dark:bg-slate-900 dark:text-white border rounded-md h-[calc(100vh-20rem)] overflow-y-auto hide-scrollbar">
                <span className=" font-normal text-slate-700 dark:bg-slate-900 dark:text-white">
                  Suggestion for you
                </span>
                {userdata.map((user, index) => (
                  <div key={index} className="flex justify-between gap-14 my-2  items-center text-[13px]">
                    <a href="/profilefriend" onClick={(e) => handleProfileClick(user, e)} className="suggestuser flex items-center gap-3 ">
                      <img
                        src={user.profilePicture || 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'}
                        alt="img"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span>{user.userName}</span>
                    </a>
                    <div className="suggestuser flex items-center gap-3">
                      <button
                        className=" bg-blue-400 shadow-lg py-1 px-2 items-center rounded-md cursor-pointer"
                        onClick={(e) => handleFollowClick(user, e)}
                      >
                        Follow
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="container1 px-3 text-start p-2 my-3 text-slate-700 bg-white dark:bg-slate-900 dark:text-white border rounded-md h-[calc(100vh-20rem)] overflow-y-auto hide-scrollbar">
                <span className=" font-bold text-slate-700 dark:bg-slate-900 dark:text-white mt-4 mb-4">
                  My Friend 
                </span>
                {followdata.map((user, index) => (
                  <div key={index} className="flex justify-between gap-14 my-2  items-center text-[13px]">
                    <a href="/profilefriend" onClick={(e) => handleProfileClick(user, e)} className="suggestuser flex items-center gap-3 ">
                      <img
                        src={user.profilePicture}
                        alt="img"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span>{user.userName}</span>
                    </a>
                    <div className="suggestuser flex items-center gap-3">
                      <button className=" bg-blue-400 shadow-lg py-1 px-2 items-center rounded-md cursor-pointer" onClick={(e) => handleUnFollowClick(user, e)}>unfollow</button>
                      
                    </div>
                  </div>
                ))}
              </div>
            
             
            </div>
          </div>
        </div>
      </div>
    );
}

export default Rightbar;
