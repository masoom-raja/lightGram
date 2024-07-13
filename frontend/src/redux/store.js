import {configureStore} from '@reduxjs/toolkit'
import darkmodeSlice from './darkmodeSlice'
import userauth from './userauth'
import profileSlice from './profileSlice'
export const store=configureStore(
    {
        reducer:{
        theme:darkmodeSlice,
        auth:userauth,
        profile:profileSlice
        },
    }
)