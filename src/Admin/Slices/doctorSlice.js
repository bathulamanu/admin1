import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/httpRequest";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  doctorsList: [],
  loading: "",
  doctorDetail: {},
  doctorPostData: {},
  doctorEditPostData: {},
  DoctorID: null,
  doctorEditDetail: [],
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
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const editDoctors = createAsyncThunk(
  "editDoctors",
  async ({ DoctorID, editDoctorData }, thunkAPI) => {
    console.log("data when we are posting", DoctorID, editDoctorData);
    try {
      const response = await api.put(
        `/UpdateDoctorDetails/${DoctorID}`,
        editDoctorData
      );
      console.log("Updated Posted successfully", response.data);
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const deleteDoctors = createAsyncThunk(
  "deleteDoctors",
  async ({ DoctorID }, thunkAPI) => {
    console.log("data when we are posting", DoctorID);
    try {
      const response = await api.delete(`/deleteDoctorDetails/${DoctorID}`);
      console.log("Deleted Posted successfully", response.data);
      toast.success(response.data.message);
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
    handleEditPostDoctor: (state, action) => {
      state.doctorEditPostData = action.payload;
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

    builder.addCase(editDoctors.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(editDoctors.fulfilled, (state, action) => {
      state.loading = "complete_success";
      // console.log("jksakgujcfjdhbk", action.payload);
      state.doctorEditDetail = action?.payload?.data;
    });
    builder.addCase(editDoctors.rejected, (state) => {
      state.authLoading = "complete_failure";
    });

    builder.addCase(deleteDoctors.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(deleteDoctors.fulfilled, (state, action) => {
      state.loading = "complete_success";
      state.doctorsList = state.doctorsList.filter(
        (doctor) => doctor.id !== action.meta.arg
      );
    });
    builder.addCase(deleteDoctors.rejected, (state) => {
      state.authLoading = "complete_failure";
    });
  },
});

export const { handlePostDoctor, handleEditPostDoctor } = doctorSlice.actions;
export default doctorSlice.reducer;
