import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./Admin/Slices/adminSlice";
import doctorSlice from "./Admin/Slices/doctorSlice";

export const store = configureStore({
  reducer: {
    admin: adminSlice,
    doctor:doctorSlice
  },
});

export default store;
