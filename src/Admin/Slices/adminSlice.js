import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adminLogin: {},
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = adminSlice.actions;
export default adminSlice.reducer;
