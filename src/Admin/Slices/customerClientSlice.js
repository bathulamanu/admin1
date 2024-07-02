import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customerapi from "../../api/customerhttpRequest";
import { ToastContainer, toast } from "react-toastify";

const initialState = {
  CustomerClientPostData: {},
  AnnexureInfo: [],
  loading: "",
};

export const addOrupdateAnnexureInfo = createAsyncThunk(
  "addOrupdateAnnexureInfo",
  async (data, thunkAPI) => {
    try {
      const response = await customerapi.post(`/addOrupdateAnnexureInfo`, data);
      console.log("addOrupdateAnnexureInfo", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const customerClientSlice = createSlice({
  name: "customerClient",
  initialState,
  reducers: {
    handlePostcustomerClient: (state, action) => {
      state.CustomerClientPostData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addOrupdateAnnexureInfo.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addOrupdateAnnexureInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.AnnexureInfo = action.payload;
      toast.success(action.payload.message);
    });
    builder.addCase(addOrupdateAnnexureInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      toast.error(action.payload.message);
    });
  },
});

export const { handlePostcustomerClient } = customerClientSlice.actions;

export default customerClientSlice.reducer;
