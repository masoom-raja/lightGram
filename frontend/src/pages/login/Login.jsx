import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../redux/userauth"; // Ensure the correct import path

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formdata, setFormdata] = useState({
    userName: "",
    password: ""
  });

  const [message, setMessage] = useState({
    type: "",
    text: ""
  });

  // Check for token in localStorage on component mount
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token && isloggedin) {
//       // If user is already logged in, redirect to home page
//       navigate("/");
//     }
//   }, [isloggedin, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        formdata,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      if (response.data && response.data.user) {
        localStorage.setItem("token", JSON.stringify({user:response.data.user, token: response.data.token}));
        dispatch(login({user:response.data.user, token: response.data.token}));

        navigate("/"); // Redirect to home page after successful login
      } else {
        console.error("Login response did not contain user data");
        setMessage({ type: "error", text: "Login failed. Please try again." });
      }
    } catch (err) {
      if (err.response) {
        console.error(
          "Response error:",
          err.response.status,
          err.response.data
        );
        setMessage({
          type: "error",
          text: err.response.data.message || "An error occurred"
        });
      } else if (err.request) {
        console.error("Request error:", err.request);
        setMessage({
          type: "error",
          text: "No response from the server. Please try again later."
        });
      } else {
        console.error("Error", err.message);
        setMessage({
          type: "error",
          text: "An unexpected error occurred. Please try again."
        });
      }
    }
  };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     dispatch(logout());
//     navigate("/login");
//   };

//   const token=useSelector((state) => state.auth.token); 
//   console.log("token from app ",token)

//   if(token)
//     {
//       return <Navigate to="/" replace />
//     }

  // If the user is logged in, navigate to the home page
//   if (isloggedin) {
//     return <Navigate to="/" replace />;
//   }

  return (
    <div className="min-h-screen bg-customColor1 flex justify-center items-center">
      <div className="card h-auto flex flex-col md:flex md:flex-row bg-slate-100 flex-wrap rounded-xl">
        <div className="left bg-custom-image bg-cover px-5 md:rounded-l-xl rounded-xl text-slate-100">
          <div className="flex flex-col flex-wrap w-64 gap-10 py-10 mx-10 ml-1 mr-6">
            <div className="heading font-bold text-2xl flex flex-col gap-2">
              <span className="flex items-start"> Welcome To,</span>
              <span className="items-end font-serif">LightGram</span>
            </div>
            <div className="font-sans text-left p-2">
              Create an account or log into LightGram. Connect with friends,
              family and other people you know. Share photos and videos.
            </div>
            <div>
              <p>Don't you have an Account</p>
              <Link to="/registration">
                <button className="bg-white text-black px-8 py-1 mt-4 rounded-lg hover:bg-purple-200">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="right flex flex-col p-10 mx-10 gap-10">
          <div className="login text-3xl font-medium font-serif mt-10">
            LogIn
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              required
              type="text"
              name="userName"
              id="userName"
              placeholder="Username"
              onChange={(e) =>
                setFormdata({ ...formdata, userName: e.target.value })
              }
              className="px-2 pt-2 border-b border-b-slate-200 rounded-md focus:outline-none focus:border-b-purple-500"
            />
            <input
              required
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              minLength="6"
              onChange={(e) =>
                setFormdata({ ...formdata, password: e.target.value })
              }
              className="px-2 pt-2 border-b border-b-slate-200 rounded-md focus:outline-none focus:border-b-purple-500"
            />
            <button className="bg-purple-400 text-white py-1 mt-4 rounded-lg hover:bg-purple-500">
              Login
            </button>
          </form>
          {message.text && (
            <div
              className={`mt-4 text-${
                message.type === "error" ? "red" : "green"
              }-500`}
            >
              {message.text}
            </div>
          )}
          {/* <button onClick={handleLogout} className="bg-red-400 text-white py-1 mt-4 rounded-lg hover:bg-red-500">
            Logout
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
