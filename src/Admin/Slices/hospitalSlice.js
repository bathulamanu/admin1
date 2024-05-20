import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../httpRequest";

const initialState = {
  hospitalsList: [],
  loading: "",
};

export const getHospitalsList = createAsyncThunk(
  "getHospitalsList",
  async (_, thunkAPI) => {
    try {
      const response = await api.get("/getHospitalDetails");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const hospitalSlice = createSlice({
  name: "hospitals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHospitalsList.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getHospitalsList.fulfilled, (state, action) => {
      state.loading = "complete_success";
      state.hospitalsList = action.payload?.data;
    });
    builder.addCase(getHospitalsList.rejected, (state) => {
      state.authLoading = "complete_failure";
    });
  },
});

export const {} = hospitalSlice.actions;
export default hospitalSlice.reducer;
