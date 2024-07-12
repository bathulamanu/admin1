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

const initialState = {
  babyList: [],
  babyDetail: {},
  babyID: null,
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
  },
});

export const {} = babySlice.actions;
export default babySlice.reducer;
