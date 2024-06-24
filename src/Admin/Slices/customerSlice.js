import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import api from "../../httpRequest";
import adminapi from "../../adminhttpRequest";

const initialState = {
  customersList: [],
  customerDetail: {},
  loading: "",
  CustomerPostData: {},
};

export const getCustomersList = createAsyncThunk(
  "getCustomersList",
  async (search, thunkAPI) => {
    try {
      const response = await adminapi.get(`/getcustomerlist`);
      // console.log("API response", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getCustomerDetails = createAsyncThunk(
  "getCustomerDetails",
  async (id, thunkAPI) => {
    try {
      const response = await adminapi.get(`getEachHospitalDetails/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCustomersList.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getCustomersList.fulfilled, (state, action) => {
      state.loading = "complete_success";
      state.customersList = action.payload.data;
    });
    builder.addCase(getCustomersList.rejected, (state) => {
      state.authLoading = "complete_failure";
    });

    builder.addCase(getCustomerDetails.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getCustomerDetails.fulfilled, (state, action) => {
      state.loading = "complete_success";
      // console.log("jksakgujcfjdhbk", action.payload);
      state.customerDetail = action?.payload?.data;
    });
    builder.addCase(getCustomerDetails.rejected, (state) => {
      state.authLoading = "complete_failure";
    });
  },
});

export const {} = customerSlice.actions;

export default customerSlice.reducer;
