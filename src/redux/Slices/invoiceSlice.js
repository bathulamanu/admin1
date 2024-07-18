import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminapi from "../../utils/api/adminhttpRequest";
import { ToastContainer, toast } from "react-toastify";

export const getAllInvoiceList = createAsyncThunk(
  "getAllInvoiceList",
  async (thunkAPI) => {
    try {
      const response = await adminapi.get(`getAllInvoice`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getCustomerWhoIsNotWithInvoice = createAsyncThunk(
  "getCustomerWhoIsNotWithInvoice",
  async (thunkAPI) => {
    try {
      const response = await adminapi.get(`getCustomerWhoIsNotWithInvoice`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getInvoiceDetails = createAsyncThunk(
  "getInvoiceDetails",
  async (customerPaymentSubId, thunkAPI) => {
    try {
      const response = await adminapi.get(
        `getEachInvoice/${customerPaymentSubId}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const createInvoice = createAsyncThunk(
  "createInvoice",
  async (data, thunkAPI) => {
    try {
      console.log("cehck payload", data);
      const response = await adminapi.post(`addInvoice`, data);
      console.log("add invoice", response.data);
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const deleteInvoice = createAsyncThunk(
  "deleteInvoice",
  async (customerPaymentSubId, thunkAPI) => {
    console.log("data when we are posting", customerPaymentSubId);
    try {
      const response = await adminapi.delete(
        `/deleteInvoice/${customerPaymentSubId}`
      );
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
  invoiceList: [],
  customerWhoIsNotWithInvoiceList: [],
  invoiceDetail: {},
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

    builder.addCase(getCustomerWhoIsNotWithInvoice.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(
      getCustomerWhoIsNotWithInvoice.fulfilled,
      (state, action) => {
        state.loading = "complete_success";
        state.customerWhoIsNotWithInvoiceList = action.payload.data;
      }
    );
    builder.addCase(getCustomerWhoIsNotWithInvoice.rejected, (state) => {
      state.authLoading = "complete_failure";
    });

    builder.addCase(getInvoiceDetails.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getInvoiceDetails.fulfilled, (state, action) => {
      state.loading = "complete_success";
      state.invoiceDetail = action?.payload?.data;
    });
    builder.addCase(getInvoiceDetails.rejected, (state) => {
      state.authLoading = "complete_failure";
    });

    builder.addCase(createInvoice.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(createInvoice.fulfilled, (state, action) => {
      state.loading = "complete_success";
      state.invoiceList = state.invoiceList.filter(
        (invoice) => invoice.id !== action.meta.arg
      );
    });
    builder.addCase(createInvoice.rejected, (state) => {
      state.authLoading = "complete_failure";
    });

    builder.addCase(deleteInvoice.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(deleteInvoice.fulfilled, (state, action) => {
      state.loading = "complete_success";
      state.invoiceList = state.invoiceList.filter(
        (invoice) => invoice.id !== action.meta.arg
      );
    });
    builder.addCase(deleteInvoice.rejected, (state) => {
      state.authLoading = "complete_failure";
    });
  },
});

export const {} = invoiceSlice.actions;
export default invoiceSlice.reducer;
