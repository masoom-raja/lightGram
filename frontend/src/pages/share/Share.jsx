  import React, { useState, useEffect } from "react";
  import UploadFileIcon from "@mui/icons-material/UploadFile";
  import SendIcon from "@mui/icons-material/Send";
  import { useSelector, useDispatch } from "react-redux";
  import axios from "axios";
  import { toggle } from "../../redux/userauth";
  import LoadingIcons from 'react-loading-icons'


  function Share() {
    const {user} = useSelector((state) => state.auth.user);
    console.log(user)
    const dispatch = useDispatch();

    const [file, setFile] = useState({
      user1: null,
      caption: "",
      imageUrl: null,
    });
  const [Loading,setLoading]=useState(false)


    const handleFileChange = (e) => {
      setFile({ ...file, imageUrl: e.target.files[0], user1: user._id });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);   
      // console.log(Loading,"before response")
      // console.log("User before state update:", file);

      if (file.imageUrl) {
          const data = new FormData();
          data.append("imageUrl", file.imageUrl);
          data.append("user", file.user1);
          data.append("caption", file.caption);

          // console.log(data, "data..........inside if");

          try {
              const response = await axios.post('http://localhost:5000/post', data, {
                  headers: {
                      'Content-Type': 'multipart/form-data'
                  }
              });
              // console.log("Response:", response.data);
              if(response.data){
                dispatch(toggle());

              }
          } catch (err) {
              console.error("Error uploading the image:", err);
          } finally {
            setLoading(false); // Hide loader
            // console.log(Loading)
        }
      }
      setFile({ user1: null, caption: "", imageUrl: null });
  };

    return (
      <div className="w-full h-auto ml-auto mr-auto pl-[16px] pr-[16px] max-w-full mt-5 md:mt-0 mb-6">
        <div className="card flex flex-col rounded-md border p-2 text-start mb-2 bg-white dark:bg-slate-900 dark:text-white">
          <form action="#" id="form" onSubmit={handleSubmit}>
            <div className="flex gap-5 items-center w-full">
              <div className="profile">
                <img
                  src={user.profilePicture}
                  alt="img"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
        

              <input
                required
                type="text"
                value={file.caption}
                placeholder={`What's on your mind `}
                onChange={(e) => setFile({ ...file, caption: e.target.value })}
                className="dark:bg-slate-900 w-full mx-2 p-2 outline-none border-b-[1px] leading-3 flex-wrap"
              />
            </div>
            <div className="file mt-6 flex mx-10 justify-between">
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <label htmlFor="file">
                <div className="item flex flex-col gap-2">
                  <div className="">
                    <UploadFileIcon />
                  </div>
                  <span>img</span>
                </div>
              </label>
              {Loading? <LoadingIcons.Circles fill="grey"  style={{width:"25px",height:"25px", marginRight:"40px",justifyItems:"center"}} />:
              <button type="submit" className="mr-10 items-center cursor-pointer">
              <SendIcon />
            </button>}
            
            </div>
          </form>
        </div>
      </div>
    );
  }

  export default Share;
