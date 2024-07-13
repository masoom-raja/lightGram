import React from "react"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import friend from './1.png'
import Group from './2.png'
import marketplace from './3.png'
import watch from './4.png'
import memories from './5.png'
import event from './6.png'
import gaming from './7.png'
import vidoes from './8.png'
import message from './9.png'
import fundraiser from './10.png'
import tutorial from './11.png'
import course from './12.png'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
function Leftbar(){
    const {user,isloggedin}=useSelector((state)=>state.auth)
    const darkmode=useSelector((state)=>state.theme.darkmode)
    return(
      <div className={darkmode?'dark':''}>
          <div className="leftbar flex-2 sticky top-14 h-[calc(100vh-6.8rem)] md:h-[calc(100vh-3.5rem)] overflow-scroll hide-scrollbar mt-14 dark:bg-slate-900 dark:text-white bg-white hidden sm:block" >
            {/* <div className="items1 p-4 mx-auto flex-2 w-60 my-2 ">    
            <div className="flex items-center mb-4">
            <Link to='/profile' className="w-50">  
            <div class="relative dark:bg-slate-900 dark:text-white flex w-auto px-4 h-auto flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="  relative mr-4 mt-4 mb-2 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
    <img src={user.profilePicture} alt="profile-picture" className="w-10 h-10 "/>
  </div>
  <div class="text-center">
    <h4 class=" block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
    {user.fullName}
    </h4>
    <p class="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
      View Profile
    </p>
  </div>
  
</div>
            </Link>
                </div>   
              

                <div className="list1 flex flex-col gap-2 ">
                <div className=" flex gap-2 items-center">
                <img src={friend} alt="img" className="w-[25px]"/><span className=" items-center text-[13px]">Friend</span>
                </div>
                <div className=" flex gap-2 items-center">
                <img src={Group} alt="img" className="w-[25px]"/><span className=" items-center text-[13px]">Groups</span>
                </div>
                <div className=" flex gap-2 items-center">
                <img src={marketplace} alt="img" className="w-[25px]"/><span className=" items-center text-[13px]">Marketplace</span>
                </div>
                <div className=" flex gap-2 items-center">
                <img src={watch} alt="img" className="w-[25px]"/><span className=" items-center text-[13px]">Watch</span>
                </div>
                <div className=" flex gap-2 items-center">
                <img src={memories} alt="img" className="w-[25px]"/><span className=" items-center text-[13px]">Memories</span>
                </div>
                </div>

                <hr className=" border-spacing-3 font-bold bg-slate-300 mt-2 p-[0.5px]"/>
                <p className="mb-2 text-[15px] text-start">Your shortcuts</p>

                <div className="list2 flex flex-col gap-2">
                <div className=" flex gap-2 items-center">
                <img src={event} alt="img" className="w-[25px]"/><span className=" items-center text-[13px]">Events</span>
                </div>
                <div className=" flex gap-2 items-center">
                <img src={gaming} alt="img" className="w-[25px]"/><span className=" items-center text-[13px]">Gaming</span>
                </div>
                <div className=" flex gap-2 items-center">
                <img src={marketplace} alt="img" className="w-[25px]"/><span className=" items-center text-[13px]">Gallery</span>
                </div>
                <div className=" flex gap-2 items-center">
                <img src={vidoes} alt="img" className="w-[25px]"/><span className=" items-center text-[13px]">Videos</span>
                </div>
                <div className=" flex gap-2 items-center">
                <img src={message} alt="img" className="w-[25px]"/><span className=" items-center text-[13px]">Message</span>
                </div>
                </div>

                <hr className=" border-spacing-3 font-bold bg-slate-300 mt-2 p-[0.5px]"/>
                <p className="mb-2 text-[15px] text-start">Others</p>

                <div className="list3 flex flex-col gap-2">
                <div className=" flex gap-2 items-center">
                <img src={fundraiser} alt="img" className="w-[25px]"/><span className=" items-center text-[13px]">Fundraiser</span>
                </div>
                <div className=" flex gap-2 items-center">
                <img src={tutorial} alt="img" className="w-[25px]"/><span className=" items-center text-[13px]">Tutorials</span>
                </div>
                <div className=" flex gap-2 items-center">
                <img src={course} alt="img" className="w-[25px]"/><span className=" items-center text-[13px]">Course</span>
                </div>
                
                
                </div>
            </div> */}
 <div class=" mt-2 w-60">
                <div class="bg-white shadow rounded-lg p-6 ">
                    <div class="flex flex-col items-center">
                        <img src={user.profilePicture} class="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0">

                        </img>
                        <h1 class="text-xl font-bold">{user.fullName}</h1>
                        <p class="text-gray-700">{user.bio}</p>
                        <div class="mt-6 flex flex-wrap gap-4 justify-center">
                            <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Following : {user.following.length}</a>
                            <a href="#" class="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">Followers : {user.followers.length}</a>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
      </div>
    )
}
export default Leftbar