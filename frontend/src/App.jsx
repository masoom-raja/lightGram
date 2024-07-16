import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import Login from './pages/login/Login';
import Registration from './pages/login/Register';
import { Outlet } from 'react-router-dom';
import Navbar from './pages/navbar/navbar';
import Leftbar from './pages/leftbar/leftbar';
import Rightbar from './pages/Rightbar/rightbar';
import { useSelector,useDispatch } from 'react-redux';
import Footer from './pages/footer/footer.jsx';
import { login, profile } from './redux/userauth.js';

function App() {
  const { token } = useSelector((state) => state.auth);
  const [Token,setToken]=useState("")
  const dispatch = useDispatch();

  useEffect(()=>{
    let data = localStorage.getItem("token");
    let profiles=localStorage.getItem("profile");
    if(data){
      data=JSON.parse(data);
      dispatch(login({user:data.user,token:data.token}))
      profiles=JSON.parse(profiles);
      dispatch(profile(profiles))
    }
  },[])
  // console.log("loggedin", isloggedin);

  return (
    <div className='relative'>
      { token ? (
        <Provider store={store}>
          <div>
            <Navbar />
          </div>
          <div className='flex'>
            <Leftbar />
            <div className='flex-5 grow mt-14'>
              <Outlet />
            </div>
            <Rightbar />
          </div>
          <Footer />
        </Provider>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
