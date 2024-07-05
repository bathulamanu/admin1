import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./Admin/Slices/adminSlice";
import doctorSlice from "./Admin/Slices/doctorSlice";
import hospitalSlice from "./Admin/Slices/hospitalSlice";
import globalSlice from "./Admin/Slices/globalSlice";
import settingSlice from "./Admin/Slices/settingSlice";
import tabSlice from "./Admin/Slices/tabSlice";
import customerSlice from "./Admin/Slices/customerSlice";
import settingLayoutSlice from "./Admin/Slices/settingLayoutSlice";
import customerClientSlice from "./Admin/Slices/customerClientSlice";
import planSlice from "./Admin/Slices/planSlice";

export const store = configureStore({
  reducer: {
    admin: adminSlice,
    doctor: doctorSlice,
    hospitals: hospitalSlice,
    global: globalSlice,
    settings: settingSlice,
    settinglayout: settingLayoutSlice,
    tab: tabSlice,
    customers: customerSlice,
    customerClient: customerClientSlice,
    plan: planSlice,
  },
});

export default store;
