import { createSlice } from "@reduxjs/toolkit";

const tabSlice = createSlice({
  name: "tab",
  initialState: {
    selectedTab: 0,
  },
  reducers: {
    setSelectedTab: (state, action) => {
      state.selectedTab = action.payload;
    },
  },
});

export const { setSelectedTab } = tabSlice.actions;

export default tabSlice.reducer;
