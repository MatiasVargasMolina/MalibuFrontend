import {configureStore} from "@reduxjs/toolkit"
import {counterSlice} from "../slices/counter"
import {apiSlice} from "../slices/api/apiSlice"
export const store= configureStore({
    reducer:{
        counter: counterSlice.reducer,
        api: apiSlice.reducer,
    }
})