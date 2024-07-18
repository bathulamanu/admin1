import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTitle: "Payment Mode", // Default title
  activeButton: 0,
};

const settingCutomerLayoutSlice = createSlice({
  name: "settingCutomerLayout",
  initialState,
  reducers: {
    setActiveTitle: (state, action) => {
      state.activeTitle = action.payload.title;
      state.activeButton = action.payload.buttonIndex;
    },
  },
});

export const { setActiveTitle } = settingCutomerLayoutSlice.actions;
export default settingCutomerLayoutSlice.reducer;
