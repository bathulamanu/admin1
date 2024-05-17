import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./Admin/Slices/adminSlice";

export const store = configureStore({
  reducer: {
    admin: adminSlice,
  },
});

export default store;
