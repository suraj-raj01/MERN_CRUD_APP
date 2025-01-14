import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from "../Redux/Slice"

export const store = configureStore({
  reducer: {
    del:CounterReducer
  },
})