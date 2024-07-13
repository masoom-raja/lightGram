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

function Leftbar(){
    const darkmode=useSelector((state)=>state.theme.darkmode)
    return(
       <div className={darkmode?'dark':''}>
         <div className="leftbar sticky">
            <div className="items1 p-4 mx-auto flex-2 w-60 ">    
            <div className=" flex gap-2 items-center">
                <AccountCircleIcon/><span className=" items-center text-[15px] font-bold">users</span>
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
            </div>
        </div>
       </div>
    )
}
export default Leftbar