import { createSlice } from '@reduxjs/toolkit'


export const productsSlice = createSlice({
  name: 'counter',
  initialState:{
    prod
  },
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment} = productsSlice.actions