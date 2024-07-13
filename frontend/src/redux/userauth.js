import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// import { profile } from './profileSlice';

const initialState = {
  user: null,
  isloggedin: false,
  profile: null,
  token: null,
  toggle:false
};

const userauth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isloggedin = true;
      // state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.isloggedin = false;
    },
    toggle: (state) => {
      state.toggle = !state.toggle;
    },
    profile: (state, action) => {
      state.profile = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    }
  }
});

export const { login,toggle, logout, profile, setToken } = userauth.actions;
export default userauth.reducer;

// export const initializeAuth = () => async (dispatch) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     try {
//       // Validate the token and get user data
//       const response = await axios.get('http://localhost:5000/me', {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       dispatch(login({ user: response.data.user, token }));
//     } catch (error) {
//       console.error('Token validation failed:', error);
//       localStorage.removeItem('token');
//     }
//   }
// };
