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
  const {user}=useSelector((state)=>state.auth.user)
  const {token}=useSelector((state)=>state.auth)
  console.log(token,"navabar")
  // console.log(isloggedin)
  // console.log(user)
 // const { user, isLoggedIn, logout } = useContext(AuthContext);
  const darkmode = useSelector((state) => state.theme.darkmode);
  const dispatch = useDispatch();
  const handlelogout=()=>{
    dispatch(logout(token));
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
   }

  return (
    <div className={darkmode ? "dark" : ""}>
    <div className="nav w-full fixed top-0 z-50 bg-white dark:bg-slate-900 dark:text-white pb-1 rounded-b-xl">
      <div className="_container flex flex-wrap items-center justify-between border-b-slate-100 shadow-lg py-5 md:py-3 md:px-5 px-2">
        <div className="left flex items-center gap-2 md:gap-5">
          <Link to="/" className="flex items-center">
            <h1 className="font-bold text-purple-500">LightGram</h1>
            <MdAutoAwesome className="ml-2 mt-1 text-purple-500" style={{ fontSize: "20px" }} />
          </Link>
          <Link to="/" className="hidden md:block">
            <HomeIcon />
          </Link>
          <button onClick={() => dispatch(toggledarkmode())} className="hidden md:block">
            <DarkModeIcon />
          </button>
          <div className="search flex items-center gap-2 border border-slate-300 p-1 rounded-lg">
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
        {token ? (
          <div className="right flex items-center gap-2 md:gap-5">
            <Link to="/groupchat" className="hidden md:block">
              <MailOutlineIcon />
            </Link>
            <div className="hidden md:block">
              <NotificationsIcon />
            </div>
            <div className="flex items-center gap-2 ml-2">
              <Link to="/profile">
                <img
                  src={user.profilePicture}
                  alt="img"
                  className="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover"
                />
              </Link>
              <span className="hidden md:block">{user.fullName}</span>
            </div>
            <Link to="/login">
              <button onClick={handlelogout} className="ml-4">
                Logout
              </button>
            </Link>
          </div>
        ) : (
          <div className="right flex gap-2 md:gap-5">
            <Link to="/login" className="ml-4">
              Login
            </Link>
            <Link to="/registration">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  </div>
);
  
}

export default Navbar;
