import React from "react";

function Story(){

    return(

        <div className="stories flex gap-1 sm:h-[190px] mb-[30px] bg-white pl-2 dark:bg-slate-900 dark:text-white sticky">
      <div className="story flex-1 overflow-hidden relative mt-4">    
          <img src="https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" className="sm:w-[100px] sm:h-[100px]object-cover rounded-md mt-1" />
          <span className=" absolute bottom-1 left-1 text-[8px] sm:bottom-[25px] sm:left-[10px] sm:text-[15px] text-white">Your story</span>
          <button className=" absolute bottom-[1px] right-[1px] sm:bottom-5 sm:left-[88px] bg-green-600 text-white cursor-pointer rounded-full md:rounded-md md:right-3">+</button>         
        </div>
        <div className="story flex-1 rounded-md overflow-hidden relative mt-4">    
          <img src="https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" className="sm:w-[100px] sm:h-[100px]object-cover sm:rounded-md mt-1" />
          <span className=" absolute bottom-[1px] left-[4px] sm:text-[15px] text-[8px] sm:bottom-[25px] sm:left-[10px] text-white">username</span>
        </div>

        <div className="story flex-1 rounded-md overflow-hidden relative mt-4">    
          <img src="https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" className=" w-[100px] h-[100px]object-cover rounded-md mt-1" />
          <span className=" absolute bottom-[1px] left-[4px] sm:text-[15px] text-[8px] sm:bottom-[25px] sm:left-[10px] text-white">username</span>
        </div>
        <div className="story flex-1 rounded-md overflow-hidden relative mt-4">    
          <img src="https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" className=" w-[100px] h-[100px]object-cover rounded-md mt-1" />
          <span className=" absolute bottom-[1px] left-[4px] sm:text-[15px] text-[8px] sm:bottom-[25px] sm:left-[10px] text-white">username</span>
        </div>
        <div className="story flex-1 rounded-md overflow-hidden relative mt-4">    
          <img src="https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" className=" w-[100px] h-[100px]object-cover rounded-md mt-1" />
          <span className=" absolute bottom-[1px] left-[4px] sm:text-[15px] text-[8px] sm:bottom-[25px] sm:left-[10px] text-white">username</span>
        </div>
      
        

        </div>
// {/* //        <div className=" mx-3 "> 
// //         <div className="story w-full flex gap-2 relative snap-x">
// //        <div className="containeeer w-25 h-25 border rounded-xl relative flex flex-wrap snap-center">
// //            <img src="https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" className="w-20 rounded-xl"/>
// //            <span className=" absolute right-10 text-[12px] display: block">USER1</span>
// //        </div>
// //        <div className="containeeer w-22 h-20 border rounded-xl relative flex flex-wrap snap-center">
// //            <img src="https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" className="w-20 rounded-xl"/>
// //            <span className=" absolute right-10 text-[12px] display: block">USER1</span>
// //        </div>
// //        <div className="containeeer w-22 h-20 border rounded-xl relative flex flex-wrap snap-center">
// //            <img src="https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" className="w-20 rounded-xl"/>
// //            <span className=" absolute right-10 text-[12px] display: block">USER1</span>
// //        </div>
// //        <div className="containeeer w-22 h-20 border rounded-xl relative flex flex-wrap snap-center">
// //            <img src="https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" className="w-20 rounded-xl"/>
// //            <span className=" absolute right-10 text-[12px] display: block">USER1</span>
// //        </div>
// //        <div className="containeeer w-22 h-20 border rounded-xl relative flex flex-wrap snap-center">
// //            <img src="https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" className="w-20 rounded-xl"/>
// //            <span className=" absolute right-10 text-[12px] display: block">USER1</span>
// //        </div>
// //        <div className="containeeer w-22 h-20 border rounded-xl relative flex flex-wrap ">
// //            <img src="https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" className="w-20 rounded-xl"/>
// //            <span className=" absolute right-10 text-[12px] display: block">USER1</span>
// //        </div>
// //          <div className="containeeer w-22 h-20 border rounded-xl relative flex flex-wrap">
// //            <img src="https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" className="w-20 rounded-xl"/>
// //            <span className=" absolute right-10 text-[12px] display: block">USER1</span>
// //        </div>

       
// //    </div></div> */}
    )
}
export default Story