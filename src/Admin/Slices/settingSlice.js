import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/httpRequest";

const initialState = {
  settingsList: [],
  loading: "",
  settingsDetail: {},
};
// /flyingbyts/api/user/getMasterConfiguration/:title/:search
// /flyingbyts/api/user/getHospitalDetails/:search
// /flyingbyts/api/user/getDoctorDetails/:search
export const getSettingList = createAsyncThunk(
  "getSettingList",
  async (title, search, thunkAPI) => {
    try {
      console.log("The title is ", title);
      const response = await api.get(
        `getMasterConfiguration/${title}/${search}`
      );
      console.log("API response", response);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSettingList.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getSettingList.fulfilled, (state, action) => {
      state.loading = "complete_success";
      state.settingsList = action.payload.data;
    });
    builder.addCase(getSettingList.rejected, (state) => {
      state.authLoading = "complete_failure";
    });
  },
});

export const {} = settingSlice.actions;
export default settingSlice.reducer;
