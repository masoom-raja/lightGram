import {createSlice} from '@reduxjs/toolkit'
const profileslice=createSlice(
   {
      name:"profileslice",
      initialState:{
       
         profile:null
         
      },
      reducers:{
       profile:(state,action)=>{
         state.profile=action.payload
       }
      }
   }
)
export const {profile}=profileslice.actions
export default profileslice.reducer