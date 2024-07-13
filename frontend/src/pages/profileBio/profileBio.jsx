import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoCloudUploadSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import LoadingIcons from 'react-loading-icons'

import { toggle, login } from "../../redux/userauth";
import axios from "axios";
function ProfileBio() {
  const users = useSelector((state) => state.auth.user);
  const [Loading,setLoading]=useState(false)
  const dispatch = useDispatch();
  //console.log(user.porfilebio, "profileBioUser");
  const navigate = useNavigate();
  const [file, setFile] = useState({
    user: "",
    bio: "",
    imageUrl: null,
  });
  const handleFileChange = (e) => {
    
    setFile({ ...file, imageUrl: e.target.files[0], user: users._id });
  };
  const handleSubmit = async (e) => {
    setLoading(true); 
    e.preventDefault();
    // console.log("User before state update:", file);
    if (file.imageUrl) {
      const data = new FormData();
      data.append("imageUrl", file.imageUrl);
      data.append("user", file.user);
      data.append("bio", file.bio);

      try {
        const response = await axios.put(
          "http://localhost:5000/editprofile",
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        // console.log("Response:", response.data);
        dispatch(login(response.data));
        dispatch(toggle());
        navigate("/profile");
      } catch (err) {
        console.error("Error uploading the image:", err);
      }finally {
        setLoading(false); 
        
    }
    }

    setFile({ user: null, bio: "", imageUrl: null });
  };

  //     try {
  //         const response = await fetch('https://api.imgbb.com/1/upload?key=9fbed1b725bd67a1aaa7b85bf36e7b17', {
  //             method: 'POST',
  //             body: data
  //         });

  //     const result = await response.json();
  //     console.log(result.data.url, "imgpath........");

  //     if (result.success) {
  //         const imageUrl = result.data.url;

  //         // Update the state with the new image URL
  //         const updatedProfileBio = { ...profileBio, profileImg: imageUrl };
  //         setProfileBio(updatedProfileBio);

  //         console.log(updatedProfileBio, "......fetching img");
  //         const postFile = { ...user, profileBio: updatedProfileBio };
  //         const propertiesToRemove = ["porfilebio"];
  //         propertiesToRemove.forEach((prop) => delete postFile[prop]);

  //         console.log("afterpostfile", postFile);

  //         if (postFile.profileBio.profileImg) {
  //             await axios.put(`http://localhost:8000/users/${user.id}`, postFile)
  //                 .then((result) => {
  //                     console.log("res", result);
  //                     navigate('/profile')
  //                 })
  //                 .catch((err) => {
  //                     console.error(err);
  //                 });
  //         }
  //     } else {
  //         console.error('Error uploading the image:', result.error.message);
  //     }
  // } catch (err) {
  // console.error('Error uploading the image:', err);
  //}
  //     }
  // };

  return (
    <div className=" w-full mx-auto h-[calc(100vh-9.4rem)] md:h-screen ">
      <div className="card flex flex-col rounded-md border p-2 text-start mb-2 bg-white dark:bg-slate-900 dark:text-white h-full">
        {/* <form id="form" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5 items-center w-full mt-10">
            <input
              type="text"
              placeholder="Enter the bio"
              value={file.bio}
              onChange={(e) => setFile({ ...file, bio: e.target.value })}
              className="dark:bg-slate-900 w-full mx-2 p-2 outline-none border-b-[1px] leading-3 flex-wrap"
            />
          </div>
          <div className="file flex-col mt-6 flex mx-10 justify-between">
            <input
              type="file"
              id="profileImg"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <label htmlFor="profileImg">
              <div className="item flex flex-col">
                <div className="flex gap-7">
                  <IoCloudUploadSharp
                    style={{ color: "green", width: "100px", height: "100px" }}
                  />
                  <p>Upload profile img</p>
                </div>
                <span>Upload Img</span>
              </div>
            </label>

            <button type="submit" className="mr-10 items-center cursor-pointer">
              {" "}
              Save{" "}
            </button>
          </div>
        </form> * */}
         <form onSubmit={handleSubmit} className="mx-3 mt-5 dark:bg-slate-900 dark:text-white">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12 ">
              <h2 className="text-base font-semibold leading-7 text-gray-900 dark:bg-slate-900 dark:text-white">
                Profile
              </h2>

              <div class=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="col-span-full">
                  <label
                    for="about"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    About Write a few sentences about yourself.
                  </label>
                  <div class="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows="3"
                      type="text"
                      placeholder="   Enter the bio"
                      value={file.bio}
                      onChange={(e) =>
                        setFile({ ...file, bio: e.target.value })
                      }
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-20"
                    ></textarea>
                  </div>
                </div>

                <div class="col-span-full">
                  <label
                    for="cover-photo"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Update profile photo
                  </label>
                  <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-4">
                    <div class="text-center">
                      <svg
                        class="mx-auto h-12 w-12 text-gray-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <div class="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          for="file-upload"
                          class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            onChange={handleFileChange}
                            class="sr-only"
                          />
                        </label>
                        <p class="pl-1">or drag and drop</p>
                      </div>
                      <p class="text-xs leading-5 text-gray-600">
                        PNG, JPG up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              class="text-sm font-semibold leading-6 text-gray-900"
              onClick={()=>navigate("/profile")}
            >
              Cancel
            </button>
            {Loading? <LoadingIcons.Circles fill="grey"  style={{width:"25px",height:"25px", marginRight:"40px",justifyItems:"center"}} />:
              <button
              type="submit"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>}
          </div>
        </form>

{/* <div className="flex h-screen overflow-hidden">
  <div className="flex-1">
    <header className="bg-white p-4 text-gray-700">
      <h1 className="text-2xl font-semibold">Alice</h1>
    </header>
    
    <div className="h-screen overflow-y-auto p-4 pb-36">
      <div className="flex mb-4 cursor-pointer">
        <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
          <img 
            src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" 
            alt="User Avatar" 
            className="w-8 h-8 rounded-full" 
          />
        </div>
        <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
          <p className="text-gray-700">Hey Bob, how's it going?</p>
        </div>
      </div>
      
      <div className="flex justify-end mb-4 cursor-pointer">
        <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
          <p>Hi Alice! I'm good, just finished a great book. How about you?</p>
        </div>
        <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
          <img 
            src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" 
            alt="My Avatar" 
            className="w-8 h-8 rounded-full" 
          />
        </div>
      </div>
      
      <div className="flex mb-4 cursor-pointer">
        <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
          <img 
            src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" 
            alt="User Avatar" 
            className="w-8 h-8 rounded-full" 
          />
        </div>
        <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
          <p className="text-gray-700">That book sounds interesting! What's it about?</p>
        </div>
      </div>
      
      <div className="flex justify-end mb-4 cursor-pointer">
        <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
          <p>It's about an astronaut stranded on Mars, trying to survive. Gripping stuff!</p>
        </div>
        <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
          <img 
            src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" 
            alt="My Avatar" 
            className="w-8 h-8 rounded-full" 
          />
        </div>
      </div>
      
      <div className="flex mb-4 cursor-pointer">
        <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
          <img 
            src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" 
            alt="User Avatar" 
            className="w-8 h-8 rounded-full" 
          />
        </div>
        <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
          <p className="text-gray-700">I'm intrigued! Maybe I'll borrow it from you when you're done?</p>
        </div>
      </div>
      
      <div className="flex justify-end mb-4 cursor-pointer">
        <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
          <p>Of course! I'll drop it off at your place tomorrow.</p>
        </div>
        <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
          <img 
            src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" 
            alt="My Avatar" 
            className="w-8 h-8 rounded-full" 
          />
        </div>
      </div>
      
      <div className="flex mb-4 cursor-pointer">
        <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
          <img 
            src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" 
            alt="User Avatar" 
            className="w-8 h-8 rounded-full" 
          />
        </div>
        <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
          <p className="text-gray-700">Thanks, you're the best!</p>
        </div>
      </div>
      
      <div className="flex justify-end mb-4 cursor-pointer">
        <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
          <p>Anytime! Let me know how you like it. 😊</p>
        </div>
        <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
          <img 
            src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" 
            alt="My Avatar" 
            className="w-8 h-8 rounded-full" 
          />
        </div>
      </div>
      
      <div className="flex mb-4 cursor-pointer">
        <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
          <img 
            src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" 
            alt="User Avatar" 
            className="w-8 h-8 rounded-full" 
          />
        </div>
        <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
          <p className="text-gray-700">So, pizza next week, right?</p>
        </div>
      </div>
      
      <div className="flex justify-end mb-4 cursor-pointer">
        <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
          <p>Absolutely! Can't wait for our pizza date. 🍕</p>
        </div>
        <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
          <img 
            src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" 
            alt="My Avatar" 
            className="w-8 h-8 rounded-full" 
          />
        </div>
      </div>
      
      <div className="flex mb-4 cursor-pointer">
        <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
          <img 
            src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" 
            alt="User Avatar" 
            className="w-8 h-8 rounded-full" 
          />
        </div>
        <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
          <p className="text-gray-700">Hoorayy!!</p>
        </div>
      </div>
      
    </div>
    
    <footer className="bg-white border-t border-gray-300 p-4 absolute bottom-0 w-3/4">
      <div className="flex items-center">
        <input 
          type="text" 
          placeholder="Type a message..." 
          className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500" 
        />
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2">Send</button>
      </div>
    </footer>
  </div>
</div> */}

      </div>
    </div>
  );
}

export default ProfileBio;
