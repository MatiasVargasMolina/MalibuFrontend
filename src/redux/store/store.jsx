import {configureStore} from "@reduxjs/toolkit"
import {counterSlice} from "../slices/counter"
import {apiSlice} from "../slices/api/apiSlice"
import loginSlice from "../slices/login/loginSlice"
export const store= configureStore({
    reducer:{
        counter: counterSlice.reducer,
        api: apiSlice.reducer,
        login: loginSlice.reducer,
    }
})