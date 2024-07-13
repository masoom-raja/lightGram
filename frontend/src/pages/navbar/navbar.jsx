import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import GridViewIcon from "@mui/icons-material/GridView";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useDispatch, useSelector } from "react-redux";
import { toggledarkmode } from "../../redux/darkmodeSlice";
import { logout } from "../../redux/userauth";
import { MdAutoAwesome } from "react-icons/md";



function Navbar() {
  const navigate=useNavigate()
  const {user,isloggedin}=useSelector((state)=>state.auth)
  // console.log(isloggedin)
  // console.log(user)
 // const { user, isLoggedIn, logout } = useContext(AuthContext);
  const darkmode = useSelector((state) => state.theme.darkmode);
  const dispatch = useDispatch();

  return (
    <div className={darkmode ? "dark" : ""}>
      <div className="nav w-full h-30 md:h-auto fixed top-0 z-50 bg-white dark:bg-slate-900 dark:text-white pb-1 rounded-b-xl">
        <div className="_container flex items-center md:justify-between border-b-slate-100 shadow-lg py-5 md:py-3 md:px-5 px-2  ">
          <div className="left flex gap-2 md:gap-5 ">
            <Link to="/">
              <h1 className="font-bold text-purple-500">LightGram</h1>
            </Link>
            <MdAutoAwesome style={{marginRight:"8px",marginTop:"6px",fontSize:"20px",color: "rgb(168, 85, 247)"}}/>

            <Link to="/" className="md:block hidden ">
            <HomeIcon />
            </Link>
            <button onClick={() => dispatch(toggledarkmode())}  className="md:block hidden ">
              <DarkModeIcon/>
            </button>
            <div className="search border border-slate-300 pr-9 rounded-lg flex items-center gap-2 p-[2px]">
              <SearchIcon />
              <input
                type="text"
                name="search"
                id="search"
                placeholder="search..."
                className="outline-none flex-grow w-20 md:w-60 dark:bg-slate-900"
              />
            </div>
          </div>
          {isloggedin ? (
            <div className="right flex md:gap-5 items-center gap-2">
             <Link to='/groupchat'> <div className="hidden md:block"><MailOutlineIcon/></div></Link>
              <div className="hidden md:block"><NotificationsIcon /></div>
              <div className="flex items-center md:gap-2 ml-2">
              <Link to="/profile">
              <img
                  src={user.profilePicture}
                  alt="img"
                  className="w-6 h-6 md:w-8 md:h-8 ml-4 md:ml-0 rounded-full object-cover"
                />
                </Link>
                <span className="hidden md:block">{user.fullName}</span>
              </div>
              <Link to='/login'>
              <button onClick={()=>dispatch(logout())} className="ml-4">
                Logout
               
              </button>
              </Link>
            </div>
          ) : (
           
          
            <div className="right flex gap-5">
              <Link to="/login" className="mr-4">
                Login
              </Link>
              <Link to="/registration">Register</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
