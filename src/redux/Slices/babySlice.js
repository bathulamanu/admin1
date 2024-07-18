import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminapi from "../../utils/api/adminhttpRequest";
import { ToastContainer, toast } from "react-toastify";

export const getAllBabyList = createAsyncThunk(
  "getAllBabyList",
  async (thunkAPI) => {
    try {
      const response = await adminapi.get(`getAllBabyDetails`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getBabyDetails = createAsyncThunk(
  "getBabyDetails",
  async (babyID, thunkAPI) => {
    try {
      const response = await adminapi.get(`getEachBabyDetails/${babyID}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const addBabyDetails = createAsyncThunk(
  "createSubscriptionPlan",
  async (data, thunkAPI) => {
    try {
      console.log("cehck payload", data);
      const response = await adminapi.post(`addBabyDetails`, data);
      console.log("add baby", response);
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getBabyInfo = createAsyncThunk(
  "getBabyInfo",
  async (customerID, thunkAPI) => {
    // console.log("customerID baby Details ", customerID);
    try {
      const response = await adminapi.get(`/getBabyDetails/${customerID}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const updateBabyDetails = createAsyncThunk(
  "updateBabyDetails",
  async ({ babyID, data }, thunkAPI) => {
    try {
      console.log("cehck payload", data);
      const response = await adminapi.post(`updateBabyDetails/${babyID}`, data);
      console.log("update baby", response);
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const deleteBabyDetails = createAsyncThunk(
  "deleteBabyDetails",
  async (babyID, thunkAPI) => {
    console.log("data when we are posting", babyID);
    try {
      const response = await adminapi.delete(`/deleteBabyDetails/${babyID}`);
      console.log("delete baby", response.data);
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const initialState = {
  babyList: [],
  babyDetail: {},
  babyID: null,
  babyInfo: [],
  loading: "",
};

const babySlice = createSlice({
  name: "baby",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBabyList.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getAllBabyList.fulfilled, (state, action) => {
      state.loading = "complete_success";
      state.babyList = action.payload.data;
    });
    builder.addCase(getAllBabyList.rejected, (state) => {
      state.authLoading = "complete_failure";
    });

    builder.addCase(getBabyDetails.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getBabyDetails.fulfilled, (state, action) => {
      state.loading = "complete_success";
      state.babyDetail = action?.payload?.data;
    });
    builder.addCase(getBabyDetails.rejected, (state) => {
      state.authLoading = "complete_failure";
    });
    builder.addCase(addBabyDetails.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(addBabyDetails.fulfilled, (state, action) => {
      state.loading = "complete_success";
      state.babyList = state.babyList.filter(
        (baby) => baby.id !== action.meta.arg
      );
    });
    builder.addCase(addBabyDetails.rejected, (state) => {
      state.authLoading = "complete_failure";
    });

    builder.addCase(getBabyInfo.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getBabyInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.babyInfo = action.payload.data;
    });
    builder.addCase(getBabyInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(deleteBabyDetails.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(deleteBabyDetails.fulfilled, (state, action) => {
      state.loading = "complete_success";
      state.babyList = state.babyList.filter(
        (baby) => baby.id !== action.meta.arg
      );
    });
    builder.addCase(deleteBabyDetails.rejected, (state) => {
      state.authLoading = "complete_failure";
    });
  },
});

export const {} = babySlice.actions;
export default babySlice.reducer;
