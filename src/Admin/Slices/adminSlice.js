import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../httpRequest";

const initialState = {
  adminLogin: {},
  loading: "",
};

export const getUserLogin = createAsyncThunk(
  "getDoctorsList",
  async (data, thunkAPI) => {
    try {
      const response = await api.post("/employeeOrAdminLogin", data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserLogin.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getUserLogin.fulfilled, (state, action) => {
      state.loading = "complete_success";
      state.adminLogin = action.payload.data;
      const token = action.payload.data.token;
      localStorage.setItem("accessToken", token);
    });
    builder.addCase(getUserLogin.rejected, (state) => {
      state.authLoading = "complete_failure";
    });
  },
});

export const {} = adminSlice.actions;
export default adminSlice.reducer;
