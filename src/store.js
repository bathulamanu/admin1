import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./Admin/Slices/adminSlice";
import doctorSlice from "./Admin/Slices/doctorSlice";
import hospitalSlice from "./Admin/Slices/hospitalSlice";
import globalSlice from "./Admin/Slices/globalSlice";

export const store = configureStore({
  reducer: {
    admin: adminSlice,
    doctor:doctorSlice,
    hospitals:hospitalSlice,
    global:globalSlice
  },
});

export default store;
