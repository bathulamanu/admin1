import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTitle: "Specialization", // Default title
  activeButton: 0,
};

const settingLayoutSlice = createSlice({
  name: "settinglayout",
  initialState,
  reducers: {
    setActiveTitle: (state, action) => {
      state.activeTitle = action.payload.title;
      state.activeButton = action.payload.buttonIndex;
    },
  },
});

export const { setActiveTitle } = settingLayoutSlice.actions;
export default settingLayoutSlice.reducer;
