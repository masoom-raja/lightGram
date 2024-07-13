import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoCloudUploadSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";

import LoadingIcons from "react-loading-icons";

import { toggle, login } from "../../redux/userauth";
import axios from "axios";
function Groupchat() {
  const users = useSelector((state) => state.auth.user);
  const dep = useSelector((state) => state.auth.toggle);
  const darkmode = useSelector((state) => state.theme.darkmode);
  const [Loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [chat, setchat] = useState({
    user: "",
    message: "",
  });
  const [chatdisplay, setchatdisplay] = useState([]);

  useEffect(() => {
    const fetchChat = async () => {
      try {
        const fetchChatResponse = await axios.get("http://localhost:5000/getchat");
        // console.log(fetchChatResponse.data.data, "chat...............");
        const chatData = Array.from(fetchChatResponse.data.data).reverse();
        // console.log(chatData, "reversed chat data");
        setchatdisplay(chatData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchChat();
  }, [dep]);

  const handleFileChange = (e) => {
    setchat({ ...chat, message: e.target.value, user: users._id });
  };
  const handlechat = async (e) => {
    e.preventDefault();
    if (!chat.message) {
      return;
    } else {
      setLoading(true);

      // console.log("User before state update:", chat);
      try {
        const response = await axios.post("http://localhost:5000/chat", chat);
        // console.log(response);
        dispatch(toggle());
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false); // Hide loader
        // console.log(Loading);
      }
      setchat({ user: null, message: "" });
    }
  };
  // console.log(chatdisplay, "display.......................");

  return (
    <div className={darkmode ? "dark" : ""}>
      <div className=" w-full  mx-auto h-[calc(100vh-8.4rem)] md:h-[calc(100vh-3.4rem)]">
        <div className="card flex flex-col rounded-md border p-2 text-start mb-2 bg-white dark:bg-slate-900 dark:text-white h-full">
          <div className="flex h-full overflow-hidden">
            <div className="flex-1">
              <header className="bg-white p-4 text-gray-700 dark:bg-slate-900 dark:text-white">
                <h1 className="text-2xl font-semibold">
                  Group Chats{" "}
                  <p className=" text-[15px]">lets Connect with strainger</p>
                </h1>
              </header>

              <div className="h-screen overflow-y-auto p-4 pb-36">
                {chatdisplay.map((chat, index) =>
                  chat.user._id === users._id ? (
                    <div className="flex justify-end mb-4 cursor-pointer">
                      <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                        <p>{chat.message}</p>
                      </div>
                      <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                        <img
                          src={chat.user.profilePicture}
                          alt="My Avatar"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                    </div>
                  ) : (
                    <div key={index} className="flex mb-4 cursor-pointer">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                        <img
                          src={chat.user.profilePicture}
                          alt="User Avatar"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                        <p className="text-gray-700">{chat.message}</p>
                      </div>
                    </div>
                  )
                )}

              </div>

              <footer className="bg-white border-t border-gray-300 p-4 absolute bottom-20 md:bottom-0 md:w-2/4 w-full dark:bg-slate-900 dark:text-white">
                <div className="flex items-center">
                  <input
                    onChange={handleFileChange}
                    required
                    value={chat.message}
                    type="text"
                    placeholder="Type a message..."
                    className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500 dark:bg-slate-900 dark:text-white"
                  />

                  {Loading ? null : (
                    <button
                      className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2"
                      onClick={handlechat}
                    >
                      Send
                    </button>
                  )}
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Groupchat;
