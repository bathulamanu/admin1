import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customerapi from "../../utils/api/customerhttpRequest";
import adminapi from "../../utils/api/adminhttpRequest";
import { ToastContainer, toast } from "react-toastify";

export const getAllInvoiceList = createAsyncThunk(
  "getAllInvoiceList",
  async (title, search, thunkAPI) => {
    try {
      console.log("The title is ", title);
      const response = await adminapi.get(`getAllInvoice`);
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
  invoiceList: [],
  loading: "",
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllInvoiceList.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getAllInvoiceList.fulfilled, (state, action) => {
      state.loading = "complete_success";
      state.invoiceList = action.payload.data;
    });
    builder.addCase(getAllInvoiceList.rejected, (state) => {
      state.authLoading = "complete_failure";
    });
  },
});

export const {} = invoiceSlice.actions;
export default invoiceSlice.reducer;
