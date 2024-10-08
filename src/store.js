import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./Admin/Slices/adminSlice";
import doctorSlice from "./Admin/Slices/doctorSlice";
import hospitalSlice from "./Admin/Slices/hospitalSlice";
import globalSlice from "./Admin/Slices/globalSlice";
import settingSlice from "./Admin/Slices/settingSlice";
import tabSlice from "./Admin/Slices/tabSlice";
import customerSlice from "./Admin/Slices/customerSlice";

export const store = configureStore({
  reducer: {
    admin: adminSlice,
    doctor: doctorSlice,
    hospitals: hospitalSlice,
    global: globalSlice,
    settings: settingSlice,
    tab: tabSlice,
    customers: customerSlice,
  },
});

export default store;
