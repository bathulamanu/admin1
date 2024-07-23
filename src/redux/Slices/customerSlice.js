import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import api from "../../httpRequest";
import adminapi from "../../utils/api/adminhttpRequest";
import userapi from "../../utils/api/httpRequest";
import { ToastContainer, toast } from "react-toastify";

const initialState = {
  customersList: [],
  customerDetail: {},
  customerID: null,
  loading: "",
  CustomerPostData: {},
  trigger: false,
  triggerCounter: 0,
  typeOfCustomerReports: [],
  AllReports: []
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
// /flyingbyts/api/admin/getEachCustomerInfo/:customerID
export const getCustomerDetails = createAsyncThunk(
  "getCustomerDetails",
  async (customerID, thunkAPI) => {
    console.log("customerID", customerID);
    try {
      const response = await adminapi.get(`getEachCustomerInfo/${customerID}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const customerCreateByAdmin = createAsyncThunk(
  "customerCreateByAdmin",
  async (payload, thunkAPI) => {
    try {
      const response = await adminapi.post("/customerCreateByAdmin", payload);
      const { problem, data } = response;
      if (data?.status == 200) {
        toast.success(data?.message);
        return data;
      } else {
        return thunkAPI.rejectWithValue({ data, problem });
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const customerUpdateByAdmin = createAsyncThunk(
  "customerUpdateByAdmin",
  async (data, thunkAPI) => {
    // alert("ok okat ")
    console.log("data when we are posting", data);
    try {
      const response = await adminapi.put(`/updateCustomerInfoByAdmin`, data);
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

export const saveBabyDetails = createAsyncThunk(
  "saveBabyDetails",
  async (data, thunkAPI) => {
    try {
      let obj = {
        type: "SET_TRIGGER",
        payload: data,
      };
      thunkAPI.fulfillWithValue(obj);
    } catch (error) { }
  }
);

export const getCustomerReportsNames = createAsyncThunk(
  "getCustomerReportsNames",
  async (thunkAPI) => {
    try {
      const response = await userapi.get(`getMasterConfiguration/Customer Reports/null`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const createReport = createAsyncThunk(
  "createReport",
  async (payload, thunkAPI) => {
    try {
      const response = await adminapi.post("/createReport", payload);
      const { problem, data } = response;
      if (data?.status == 200) {
        toast.success(data?.message);
        return data;
      } else {
        return thunkAPI.rejectWithValue({ data, problem });
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const UpdateReport = createAsyncThunk(
  "UpdateReport",
  async ({ recordId, formValues }, thunkAPI) => {
    try {
      console.log("update data and id", recordId, formValues);
      const response = await adminapi.put(
        `/UpdateReport/${recordId}`,
        formValues
      );
      console.log("Updated report successfully", response.data);
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);



export const deleteReport = createAsyncThunk(
  "deleteReport",
  async (reportID, thunkAPI) => {
    try {
      console.log("ccccccccccccccc slice slice aslie cslice  ", "/deleteReport/" + reportID, {});
      const response = await adminapi.delete("/deleteReport/" + reportID, {});
      const { problem, data } = response;
      if (data?.status == 200) {
        toast.success(data?.message);
        return data;
      } else {
        return thunkAPI.rejectWithValue({ data, problem });
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getReport = createAsyncThunk(
  "getReport",
  async (customerID, thunkAPI) => {
    try {
      console.log("kkkk repoprt  ", customerID);
      const response = await adminapi.get(`getReport/${customerID}`);
      // return response.data;
      const { problem, data } = response;
      if (data?.status == 200) {
        // toast.success(data?.message);
        return data;
      } else {
        return thunkAPI.rejectWithValue({ data, problem });
      }
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
    builder.addCase(getReport.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getReport.fulfilled, (state, action) => {
      state.loading = "complete_success";
      state.AllReports = action.payload.data;
    });
    builder.addCase(getReport.rejected, (state) => {
      state.authLoading = "complete_failure";
    });
    builder.addCase(getCustomerReportsNames.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getCustomerReportsNames.fulfilled, (state, action) => {
      state.loading = "complete_success";
      state.typeOfCustomerReports = action.payload.data;
    });
    builder.addCase(getCustomerReportsNames.rejected, (state) => {
      state.authLoading = "complete_failure";
    });
    builder.addCase(saveBabyDetails.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(saveBabyDetails.fulfilled, (state, action) => {
      state.loading = "complete_success";
      state.trigger = true; //'action.payload;
      state.triggerCounter += 1;
      localStorage.setItem("check", true);
    });
    builder.addCase(saveBabyDetails.rejected, (state) => {
      state.authLoading = "complete_failure";
    });

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

export const { } = customerSlice.actions;

export default customerSlice.reducer;
