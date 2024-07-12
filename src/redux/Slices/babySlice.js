import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminapi from "../../utils/api/adminhttpRequest";
import { ToastContainer, toast } from "react-toastify";

export const getAllBabyList = createAsyncThunk(
  "getAllBabyList",
  async (thunkAPI) => {
    try {
      const response = await adminapi.get(`getAllBabyDetails`);
      console.log("API response", response);
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
  },
});

export const {} = babySlice.actions;
export default babySlice.reducer;
