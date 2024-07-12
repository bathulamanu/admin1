import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./redux/Slices/adminSlice";
import doctorSlice from "./redux/Slices/doctorSlice";
import hospitalSlice from "./redux/Slices/hospitalSlice";
import globalSlice from "./redux/Slices/globalSlice";
import settingSlice from "./redux/Slices/settingSlice";
import tabSlice from "./redux/Slices/tabSlice";
import customerSlice from "./redux/Slices/customerSlice";
import settingLayoutSlice from "./redux/Slices/settingLayoutSlice";
import customerClientSlice from "./redux/Slices/customerClientSlice";
import planSlice from "./redux/Slices/planSlice";
import invoiceSlice from "./redux/Slices/invoiceSlice";
import babySlice from "./redux/Slices/babySlice";

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
    invoice: invoiceSlice,
    baby: babySlice,
  },
});

export default store;
