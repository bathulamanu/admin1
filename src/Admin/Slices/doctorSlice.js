import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../httpRequest";

const initialState = {
  doctorsList: [],
  loading: "",
  doctorDetail: {},
  doctorPostData: {},
};

// /flyingbyts/api/user/getMasterConfiguration/:title/:search
// /flyingbyts/api/user/getHospitalDetails/:search
// /flyingbyts/api/user/getDoctorDetails/:search
export const getDoctorList = createAsyncThunk(
  "getDoctorsList",
  async (search, thunkAPI) => {
    try {
      const response = await api.get(`getDoctorDetails/${search}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getDoctorDetail = createAsyncThunk(
  "getDoctorView",
  async (id, _thunkApi) => {
    try {
      const response = await api.get(`/getEachDoctorDetails/${id}`);
      return response.data;
    } catch (error) {
      return _thunkApi.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const addDoctors = createAsyncThunk(
  "addDoctors",
  async (data, thunkAPI) => {
    console.log("data when we are posting", data);
    try {
      const response = await api.post("/addDoctorDetails", data);
      console.log("Posted successfully", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    handlePostDoctor: (state, action) => {
      state.doctorPostData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDoctorList.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getDoctorList.fulfilled, (state, action) => {
      state.loading = "complete_success";
      state.doctorsList = action.payload.data;
    });
    builder.addCase(getDoctorList.rejected, (state) => {
      state.authLoading = "complete_failure";
    });

    builder.addCase(getDoctorDetail.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getDoctorDetail.fulfilled, (state, action) => {
      state.loading = "complete_success";
      state.doctorDetail = action.payload.data;
    });
    builder.addCase(getDoctorDetail.rejected, (state) => {
      state.authLoading = "complete_failure";
    });
  },
});

export const { handlePostDoctor } = doctorSlice.actions;
export default doctorSlice.reducer;
