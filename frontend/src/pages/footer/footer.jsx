import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { FaUserFriends } from "react-icons/fa";
import GridViewIcon from "@mui/icons-material/GridView";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useDispatch, useSelector } from "react-redux";
import { toggledarkmode } from "../../redux/darkmodeSlice";
import { AuthContext } from "../../context/UserContext";
import { useContext } from "react";
import { logout } from "../../redux/userauth";
import Login from "../login/Login";
import { Hidden } from "@mui/material";
import { AiFillMessage } from "react-icons/ai";



function Footer() {
  const navigate=useNavigate()
  const {user,isloggedin}=useSelector((state)=>state.auth)
  // console.log(isloggedin)
  // console.log(user)
 // const { user, isLoggedIn, logout } = useContext(AuthContext);
  const darkmode = useSelector((state) => state.theme.darkmode);
  const dispatch = useDispatch();

  return (
    <div className={darkmode ? "dark" : ""}>
      <div className="nav w-full h-auto top-0 z-50 bg-white dark:bg-slate-900 dark:text-white md:hidden">
        <div className="_container flex items-center justify-between border-b-slate-100 shadow-lg py-7 px-5 mx-2 ">
          
            <Link to="/" className=" ">
            <HomeIcon style={{ fontSize: 36 }}/>
            </Link>
            <button onClick={() => dispatch(toggledarkmode())} >
              <DarkModeIcon style={{ fontSize: 36 }} />
            </button>
            <Link to="/rightbarmobile">
            <FaUserFriends style={{ fontSize: 36 }}/>
            </Link>
            <Link to="/groupchat">
            <AiFillMessage style={{ fontSize: 36 }}/>
            </Link>
            <Link to="/profile">
            <AccountCircleIcon style={{ fontSize: 36 }}/>
            </Link>
            
          
        </div>
      </div>
    </div>
  );
}

export default Footer;
