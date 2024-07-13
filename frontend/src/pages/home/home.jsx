import React from "react"
import Story from "../../Stories/story"
import Post from "../../post/post"
import Posts from "../../post/posts"
import { useSelector } from "react-redux"
import Share from "../share/Share"
import Footer from "../footer/footer"
function Home(){
    const darkmode=useSelector((state)=>state.theme.darkmode)
    // console.log(darkmode);
   
    return(
        <div   className={darkmode ? 'dark' : ''} >
           
    <div className="py-4 max-w-full md:pl-4 bg-slate-100 dark:bg-slate-900 sticky top-14 h-[calc(100vh-9.4rem)] md:h-[calc(100vh-3.5rem)] overflow-y-auto hide-scrollbar">
            <Share/>
            <Posts />
  
        </div>
        </div>
        
    )
}
export default Home