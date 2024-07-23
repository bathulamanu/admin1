import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customerapi from "../../utils/api/customerhttpRequest";
import { toast } from "react-toastify";

export const getSubscriptionPlan = createAsyncThunk(
  "getSubscriptionPlan",
  async (title, search, thunkAPI) => {
    try {
      console.log("The title is ", title);
      const response = await customerapi.get(`getSubscriptionPlan`);
      console.log("API response", response);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getSubscriptionPlanDetails = createAsyncThunk(
  "getSubscriptionPlanDetails",
  async (subscriptionID, thunkAPI) => {
    try {
      const response = await customerapi.get(
        `getEachSubscriptionPlan/${subscriptionID}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const createSubscriptionPlan = createAsyncThunk(
  "createSubscriptionPlan",
  async (addSubscriptionPlan, thunkAPI) => {
    try {
      console.log("cehck payload", addSubscriptionPlan);
      const response = await customerapi.post(
        `createSubscriptionPlan`,
        addSubscriptionPlan
      );
      // toast.success(response.data.message);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const UpdateSubscriptionPlan = createAsyncThunk(
  "UpdateSubscriptionPlan",
  async ({ subscriptionID, formValues }, thunkAPI) => {
    console.log("data when we are posting", subscriptionID, formValues);
    try {
      const response = await customerapi.put(
        `UpdateSubscriptionPlan/${subscriptionID}`,
        formValues
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const deleteSubscriptionPlan = createAsyncThunk(
  "deleteSubscriptionPlan",
  async ({ subscriptionID }, thunkAPI) => {
    // console.log("data when we are posting", subscriptionID);
    try {
      const response = await customerapi.delete(
        `/deleteSubscriptionPlan/${subscriptionID}`
      );
      console.log("Deleted successfully", response.data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const initialState = {
  planList: [],
  subscriptionPanDetails: {},
  loading: "",
  createPlan: {},
};

const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    handleCreatePlan: (state, action) => {
      state.createPlan = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSubscriptionPlan.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getSubscriptionPlan.fulfilled, (state, action) => {
      state.loading = "complete_success";
      state.planList = action.payload.data;
    });
    builder.addCase(getSubscriptionPlan.rejected, (state) => {
      state.authLoading = "complete_failure";
    });

    builder.addCase(getSubscriptionPlanDetails.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getSubscriptionPlanDetails.fulfilled, (state, action) => {
      state.loading = "complete_success";
      // console.log("jksakgujcfjdhbk", action.payload);
      state.subscriptionPanDetails = action?.payload?.data;
    });
    builder.addCase(getSubscriptionPlanDetails.rejected, (state) => {
      state.authLoading = "complete_failure";
    });

    builder.addCase(UpdateSubscriptionPlan.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(UpdateSubscriptionPlan.fulfilled, (state, action) => {
      state.loading = "complete_success";
      toast.success(action.payload.message);
    });
    builder.addCase(UpdateSubscriptionPlan.rejected, (state) => {
      state.authLoading = "complete_failure";
    });
    builder.addCase(createSubscriptionPlan.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(createSubscriptionPlan.fulfilled, (state, action) => {
      state.loading = "complete_success";
      toast.success(action.payload.message);
    });
    builder.addCase(createSubscriptionPlan.rejected, (state) => {
      state.authLoading = "complete_failure";
    });

    builder.addCase(deleteSubscriptionPlan.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(deleteSubscriptionPlan.fulfilled, (state, action) => {
      state.loading = "complete_success";
      toast.success(action.payload.message);
      state.planList = state.planList.filter(
        (plan) => plan.id !== action.meta.arg
      );
    });
    builder.addCase(deleteSubscriptionPlan.rejected, (state) => {
      state.authLoading = "complete_failure";
    });
  },
});

export const { handleCreatePlan } = planSlice.actions;
export default planSlice.reducer;
