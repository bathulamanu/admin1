import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../utils/api/httpRequest";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  hospitalsList: [],
  hospitalDetail: {},
  loading: "",
  hospitalPostData: {},
  entities: {},
  hospitalEditPostData: {},
  HospitalID: null,
  hospitalEditDetail: [],
};

// /flyingbyts/api/user/getMasterConfiguration/:title/:search
// /flyingbyts/api/user/getHospitalDetails/:search
// /flyingbyts/api/user/getDoctorDetails/:search
// /flyingbyts/api/user/UpdateHospitalDetails/:HospitalID
export const getHospitalsList = createAsyncThunk(
  "getHospitalsList",
  async (search, thunkAPI) => {
    try {
      const response = await api.get(`getHospitalDetails/${search}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getHospitalDetails = createAsyncThunk(
  "getHospitalDetails",
  async (id, thunkAPI) => {
    try {
      const response = await api.get(`getEachHospitalDetails/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const addHospitals = createAsyncThunk(
  "addHospitals",
  async (data, thunkAPI) => {
    console.log("data when we are posting", data);
    try {
      const response = await api.post("/addHospitalDetails", data);
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

export const editHospitals = createAsyncThunk(
  "editHospitals",
  async ({ HospitalID, editHospitalData }, thunkAPI) => {
    // alert("ok okat ")
    console.log("data when we are posting", HospitalID, editHospitalData);
    try {
      const response = await api.put(
        `/UpdateHospitalDetails/${HospitalID}`,
        editHospitalData
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

export const deleteHospitals = createAsyncThunk(
  "deleteHospitals",
  async ({ HospitalID }, thunkAPI) => {
    console.log("data when we are posting", HospitalID);
    try {
      const response = await api.delete(`/deleteHospitalDetails/${HospitalID}`);
      console.log("Deleted successfully", response.data);
      toast.success(response.data.message);
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
  reducers: {
    handlePostHospital: (state, action) => {
      state.hospitalPostData = action.payload;
    },
    handleEditPostHospital: (state, action) => {
      state.hospitalEditPostData = action.payload;
    },
  },
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

    builder.addCase(getHospitalDetails.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getHospitalDetails.fulfilled, (state, action) => {
      state.loading = "complete_success";
      // console.log("jksakgujcfjdhbk", action.payload);
      state.hospitalDetail = action?.payload?.data;
    });
    builder.addCase(getHospitalDetails.rejected, (state) => {
      state.authLoading = "complete_failure";
    });
    builder.addCase(editHospitals.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(editHospitals.fulfilled, (state, action) => {
      state.loading = "complete_success";
      // console.log("jksakgujcfjdhbk", action.payload);
      state.hospitalEditDetail = action?.payload?.data;
    });
    builder.addCase(editHospitals.rejected, (state) => {
      state.authLoading = "complete_failure";
    });

    builder.addCase(deleteHospitals.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(deleteHospitals.fulfilled, (state, action) => {
      state.loading = "complete_success";
      state.hospitalsList = state.hospitalsList.filter(
        (hospital) => hospital.id !== action.meta.arg
      );
    });
    builder.addCase(deleteHospitals.rejected, (state) => {
      state.authLoading = "complete_failure";
    });
  },
});

export const {
  handlePostHospital,
  handleEditPostHospital,
} = hospitalSlice.actions;
export default hospitalSlice.reducer;
