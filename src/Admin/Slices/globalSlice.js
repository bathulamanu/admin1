import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../httpRequest";

const initialState = {
  countryList: [],
  stateList: [],
  cityList: [],
  loading: "",
};

export const getCountryList = createAsyncThunk(
  "getCountryList",
  async (_, thunkAPI) => {
    try {
      const response = await api.get("/getCountryName");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getStateList = createAsyncThunk(
  "getStateList",
  async (id, thunkAPI) => {
    try {
      const response = await api.get(`/getStateName/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getCityList = createAsyncThunk(
  "getCityList",
  async (id, thunkAPI) => {
    try {
      const response = await api.get(`/getCityName/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCountryList.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getCountryList.fulfilled, (state, action) => {
      state.loading = "complete_success";
      state.countryList = action.payload.data;
    });
    builder.addCase(getCountryList.rejected, (state) => {
      state.authLoading = "complete_failure";
    });

    builder.addCase(getStateList.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getStateList.fulfilled, (state, action) => {
      state.loading = "complete_success";
      state.stateList = action.payload.data;
    });
    builder.addCase(getStateList.rejected, (state) => {
      state.authLoading = "complete_failure";
    });

    builder.addCase(getCityList.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getCityList.fulfilled, (state, action) => {
      state.loading = "complete_success";
      state.cityList = action.payload.data;
    });
    builder.addCase(getCityList.rejected, (state) => {
      state.authLoading = "complete_failure";
    });
  },
});

export const {} = globalSlice.actions;
export default globalSlice.reducer;
