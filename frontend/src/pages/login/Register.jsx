import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from 'axios';
function Registration() {
    const navigate=useNavigate()
  const [formdata, setformdata] = useState({
    email: '',
    fullName: '',
    userName: '',
    password: '',
    profilePicture:'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'
  });
  const [error,seterror]=useState({});
  const [valid,setvalid]=useState(false)
  const handleform=(e)=>{
    e.preventDefault()
    let isvalid=true;
    const validationerror={};
     if(!/\S+@\S+\.\S+/.test(formdata.email)){
        isvalid=false
        validationerror.email="email is invalid"
    }
   if(formdata.password.length<6){
    isvalid=false
    validationerror.password="password must be greater than 6"
}
if(Object.keys(validationerror).length===0){
    alert("register succesfully")
    axios.post("http://localhost:5000/register",formdata).then((res)=>console.log("succesfully done",res.data))
    .catch(error=>console.log('error',error))
    navigate('/login') 
}
seterror(validationerror)
setvalid(isvalid)


  }
  console.log(error)
  return (
    <div className=" min-h-screen bg-customColor1 flex justify-center items-center px-4">
      <div className="card h-auto flex bg-slate-100 flex-wrap rounded-xl ">
        <div className="right flex flex-col p-10 mx-10 gap-4">
          <div className="login text-3xl font-medium font-serif mt-5">
            Register
          </div>       
          <form onSubmit={handleform} className="flex flex-col gap-5">
            {valid?<></>:<span>{error.email}<br/> {error.password}</span>}
            <input
            required
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              onChange={(e)=>setformdata({...formdata,email:e.target.value})}
              className="px-2 pt-2 border-b border-b-slate-200 rounded-md focus:outline-none focus:border-b-purple-500"
            />
            <input
            required
              type="text"
              name="Fulname"
              id="fulname"
              placeholder="Full name"
              onChange={(e)=>setformdata({...formdata,fullName:e.target.value})}
              className="px-2 pt-2 border-b border-b-slate-200 rounded-md focus:outline-none focus:border-b-purple-500"
            />
            <input
            required
              type="text"
              name="Usernsme"
              id="username"
              placeholder="username"
              onChange={(e)=>setformdata({...formdata,userName:e.target.value})}
              className="px-2 pt-2 border-b border-b-slate-200 rounded-md focus:outline-none focus:border-b-purple-500"
            />
            <input
            required
              type="password"
              name="password"
              id="password"
              placeholder="password"
              onChange={(e)=>setformdata({...formdata,password:e.target.value})}
              className="px-2 pt-2 border-b border-b-slate-200 rounded-md focus:outline-none focus:border-b-purple-500"
            />
            
            <button className=" bg-purple-400  text-white  py-1 mt-4 rounded-lg hover:bg-purple-500"
            >
              Register
            </button>
           
          </form>
        </div>
        <div className="left  bg-custom-image1 bg-cover bg-center px-5 md:rounded-r-xl rounded-xl mx-auto text-slate-100 ">
          <div className="flex flex-col flex-wrap w-64  gap-10 py-10 mx-10 ml-1 mr-6 ">
            <div className="heading font-bold text-2xl flex flex-col gap-2">
              <span className="flex items-start"> Welcome To,</span>{" "}
              <span className="items-end font-serif">LightGram</span>
            </div>
            <div className=" font-sans text-left p-2">
              Create an account or log into lightGram. Connect with friends,
              family and other people you know. Share photos and videos.
            </div>
            <div>
              {" "}
              <p>Do you have an Account</p>
              <Link to="/Login">
                <button className="bg-white text-black px-8 py-1 mt-4 rounded-lg hover:bg-purple-200">
                  LogIn
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Registration;
