import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../httpRequest";

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
      const response = await api.get(`getHospitalDetails/${search}`);
      console.log("API response", response);
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
  },
});

export const {} = customerSlice.actions;

export default customerSlice.reducer;
