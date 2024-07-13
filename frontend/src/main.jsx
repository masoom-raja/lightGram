import React from "react";

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Registration from "./pages/login/Register.jsx";
import Home from "./pages/home/home.jsx";
import Profile from "./pages/profile/profile.jsx";
import ProfileBio from "./pages/profileBio/profileBio.jsx";
import { AuthProvider } from "./context/UserContext.jsx";
// import { AuthProvider } from './context/UserContext.js'
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import Profilefriend from "./pages/profile/friendprofile.jsx";
import Rightbarmobile from "./pages/Rightbar/rightbarmobile.jsx";
import Groupchat from "./pages/chart/groupchat.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profilefriend" element={<Profilefriend />} />
          <Route path="/Editprofile" element={<ProfileBio />} />
          <Route path='/rightbarmobile' element={<Rightbarmobile/>}/>
          <Route path="/groupchat" element={<Groupchat/>}/>
        </Route>

        <Route path="/login" element={<Login />} />
    <Route path="/registration" element={<Registration />} />
   


    
    </>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
