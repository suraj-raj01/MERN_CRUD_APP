import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "del",
  name:"update",
  initialState:{
    del:0,
    update:0
},
  reducers: {
    deleteItem: (state) => {
      state.del += 1;
    },
    update: (state) => {
      state.update += 1;
    }
  },
});

export default counterSlice.reducer;
export const { deleteItem, update} = counterSlice.actions;
