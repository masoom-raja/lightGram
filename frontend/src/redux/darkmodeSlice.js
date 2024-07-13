import {createSlice} from '@reduxjs/toolkit'
import { json } from 'react-router-dom';
 const darkmodeSlice=createSlice(
 {
    name:"darkmode",
    initialState:{
        darkmode:JSON.parse(localStorage.getItem('darkmode'))||false,
    },
    reducers:{
     toggledarkmode:(state)=>{
        state.darkmode=!state.darkmode
        localStorage.setItem('darkmode',JSON.stringify(state.darkmode))
     },
     setdarkmode:(state,actions)=>{
      state.darkmode=actions.payload;
     }
    

    }

 }
 )
 export const {toggledarkmode,setdarkmode}=darkmodeSlice.actions
 export default darkmodeSlice.reducer