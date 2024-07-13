import React, { useEffect, useState } from "react";
import Posts from "../../post/posts";
import { useSelector } from "react-redux";
import axios from "axios";
import Post from "../../post/post";
import { Link } from "react-router-dom";

function Profile(props){

  // const [user, setUser] = useState(null);
  // const users = useSelector((state) => state.auth.user);

  // useEffect(() => {
  //   console.log("inuseeffect",users)
  //   setUser(users);
  // }, [users]);
   const {user}=useSelector((state)=>state.auth)
    const darkmode=useSelector((state)=>state.theme.darkmode)
    const [postdata,setpostdata]=useState([])
    const toggle=useSelector((state)=>state.auth.toggle)
 

 useEffect(()=>{
  axios.get('http://localhost:5000/post').then((res)=>{
    const data=Array.from(res.data.message)
    // console.log(data,"rrrrrrrrrr")
    const newdata=data.filter((users)=>users.user.userName===user.userName)
   setpostdata(()=>newdata)
  //  console.log(typeof(data),"filterdata....")
  }).catch((err)=>console.log(err))

 },[toggle])
//  console.log(toggle,"profileuser....")
    return(
       <div className={darkmode?'dark':''}> <div className="containeer max-w-full md:pl-4 sticky top-14 h-[calc(100vh-9.4rem)] md:h-[calc(100vh-3.4rem)] overflow-y-auto hide-scrollbar bg-slate-100 dark:bg-slate-900 dark:text-white">
       <div className="imgcover h-26"><img src="https://images.pexels.com/photos/3411134/pexels-photo-3411134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" className=" w-full h-[150px] object-cover" /></div>
     <div className="imgcover h-26 flex justify-center items-center rounded-full relative"><img src={user.profilePicture} alt="img" className=" w-[150px] h-[150px] object-cover rounded-full absolute" />
     
     </div>
 <div className="card flex flex-col rounded-md border p-2 text-start mt-14 bg-white dark:bg-slate-900 dark:text-white mx-2 md:mx-0">
  <span className="items-center flex justify-center mt-3 text-slate-700 font-bold my-3">{user.fullName}</span>
    <div className="bio">{user.bio}</div>
<div className="flex flex-row item-center  justify-evenly my-4">
<p className="  px-3 text-slate-900 my-3 p-[2px] py-1 rounded-md w-fit font-bold dark:text-white"> Following {user.following.length}</p>
<p className="  px-3 text-slate-900 my-3 p-[2px] py-1 rounded-md w-fit font-bold dark:text-white"> Followers {user.followers.length}</p>

<Link to='/editprofile' className="  px-3 text-slate-900 my-3 p-[2px] py-1 rounded-md w-fit font-bold dark:text-white dark:hover:text-blue-500  hover:text-blue-500">Edit Profile</Link>
</div>
 </div>
 <span className="flex text-slate-700 pl-2 bg-slate-100 py-1 text-xl dark:bg-slate-900 dark:text-white"> My Posts</span>  
{
  postdata.map((posts)=>(< Post post={posts} id={posts.id} />)) 
}
    
</div></div>


    )
} export default Profile