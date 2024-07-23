import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../utils/api/httpRequest";
import { toast } from "react-toastify";

const initialState = {
  adminLogin: {},
  loading: "",
};

export const getUserLogin = createAsyncThunk(
  "employeeOrAdminLogin",
  async (data, thunkAPI) => {
    // console.log('We are inside getUserLogin API')

    try {
      const response = await api.post("/employeeOrAdminLogin", data);
      // console.log('The data after click on login button', response.data)
      return response.data;
    } catch (error) {
      // console.log(
      //   'We are not able to call the Login API due to this error',
      //   error,
      // )
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const employeeOrAdminForgotPwd = createAsyncThunk(
  "employeeOrAdminForgotPwd",
  async (payload, thunkAPI) => {
    try {
      const response = await api.post("/employeeOrAdminForgotPwd", payload);
      const { problem, data } = response;
      if (data?.status === 200) {
        if (payload?.callback) payload.callback();
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
      state.adminLogin = action?.payload?.data;
    });
    builder.addCase(getUserLogin.rejected, (state) => {
      state.authLoading = "complete_failure";
    });
    builder.addCase(employeeOrAdminForgotPwd.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(employeeOrAdminForgotPwd.fulfilled, (state, action) => {
      state.loading = "complete_success";
      toast.success(action.payload.message);
    });
    builder.addCase(employeeOrAdminForgotPwd.rejected, (state, action) => {
      state.authLoading = "complete_failure";
      toast.error(action.payload.message);
    });
  },
});

// export const {} = adminSlice.actions;
export default adminSlice.reducer;
