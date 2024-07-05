import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customerapi from "../../api/customerhttpRequest";
import { ToastContainer, toast } from "react-toastify";


export const getSubscriptionPlan = createAsyncThunk(
    "getSubscriptionPlan",
    async (title, search, thunkAPI) => {
        try {
            console.log("The title is ", title);
            const response = await customerapi.get(
                `getSubscriptionPlan`
            );
            console.log("API response", response);

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
            // const response = await customerapi.post( `createSubscriptionPlan`, addSubscriptionPlan );
            // toast.success(response.data.message);
            // return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response ? error.response.data : error.message
            );
        }
    }
);

export const UpdateSubscriptionPlan = createAsyncThunk(
    "UpdateSubscriptionPlan",
    async ({ subscriptionID, editSubscriptionPlan }, thunkAPI) => {
        try {
            const response = await customerapi.put(
                `UpdateSubscriptionPlan/${subscriptionID}`, editSubscriptionPlan
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
    planList: [],
    loading: "",
    createPlan: {}
};

const planSlice = createSlice({
    name: "plan",
    initialState,
    reducers: {
        handleCreatePlan: (state, action) => {
            state.createPlan = action.payload;
        }
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
        builder.addCase(UpdateSubscriptionPlan.pending, (state) => {
            state.loading = "pending";
        });
        builder.addCase(UpdateSubscriptionPlan.fulfilled, (state, action) => {
            state.loading = "complete_success";
        });
        builder.addCase(UpdateSubscriptionPlan.rejected, (state) => {
            state.authLoading = "complete_failure";
        });
        builder.addCase(createSubscriptionPlan.pending, (state) => {
            state.loading = "pending";
        });
        builder.addCase(createSubscriptionPlan.fulfilled, (state, action) => {
            state.loading = "complete_success";
        });
        builder.addCase(createSubscriptionPlan.rejected, (state) => {
            state.authLoading = "complete_failure";
        });

    },
});

export const { handleCreatePlan } = planSlice.actions;
export default planSlice.reducer;
