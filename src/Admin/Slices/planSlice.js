import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customerapi from "../../api/customerhttpRequest";

const initialState = {
    planList: [],
    loading: ""
};

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
const planSlice = createSlice({
    name: "plan",
    initialState,
    reducers: {},
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
    },
});

export const { } = planSlice.actions;
export default planSlice.reducer;
