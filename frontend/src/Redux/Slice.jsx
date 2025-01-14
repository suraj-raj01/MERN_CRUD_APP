import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "del",
  initialState:{
    del:0,
},
  reducers: {
    deleteItem: (state) => {
      state.del += 1;
    }
  },
});

export default counterSlice.reducer;
export const { deleteItem} = counterSlice.actions;
