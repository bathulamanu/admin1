import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../httpRequest";

const initialState = {
  countryList: [],
  stateList: [],
  cityList: [],
  specializationList: [],
  genderList: [],
  qualificationList: [],
  experienceList: [],
  employementList: [],
  locationList: [],
  loading: "",
};

export const getCountryList = createAsyncThunk(
  "getCountryList",
  async (_, thunkAPI) => {
    try {
      const response = await api.get("/getCountryName");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getStateList = createAsyncThunk(
  "getStateList",
  async (id, thunkAPI) => {
    try {
      const response = await api.get(`/getStateName/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getCityList = createAsyncThunk(
  "getCityList",
  async (id, thunkAPI) => {
    try {
      const response = await api.get(`/getCityName/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getSpecialization = createAsyncThunk(
  "getSpecialization",
  async (search, thunkAPI) => {
    try {
      const response = await api.get(
        `getMasterConfiguration/Specialization/${search}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getGenderList = createAsyncThunk(
  "getGenderList",
  async (search, thunkAPI) => {
    try {
      const response = await api.get(`getMasterConfiguration/Gender/${search}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getExperienceList = createAsyncThunk(
  "getExperienceList",
  async (search, thunkAPI) => {
    try {
      const response = await api.get(
        `getMasterConfiguration/Experience/${search}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getEmploymentType = createAsyncThunk(
  "getEmploymentType",
  async (search, thunkAPI) => {
    try {
      const response = await api.get(
        `getMasterConfiguration/EmploymentType/${search}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
export const getQualification = createAsyncThunk(
  "getQualification",
  async (search, thunkAPI) => {
    try {
      const response = await api.get(
        `getMasterConfiguration/Qualification/${search}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getCityNameByCountry = createAsyncThunk(
  "getCityNameByCountry",
  async (search, thunkAPI) => {
    try {
      const response = await api.get(`/getCityNameByCountry/352`);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCountryList.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getCountryList.fulfilled, (state, action) => {
      state.loading = "complete_success";
      state.countryList = action.payload.data;
    });
    builder.addCase(getCountryList.rejected, (state) => {
      state.authLoading = "complete_failure";
    });

    builder.addCase(getStateList.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getStateList.fulfilled, (state, action) => {
      state.loading = "complete_success";
      state.stateList = action.payload.data;
    });
    builder.addCase(getStateList.rejected, (state) => {
      state.authLoading = "complete_failure";
    });

    builder.addCase(getCityList.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getCityList.fulfilled, (state, action) => {
      state.loading = "complete_success";
      state.cityList = action.payload.data;
    });
    builder.addCase(getCityList.rejected, (state) => {
      state.authLoading = "complete_failure";
    });

    builder.addCase(getSpecialization.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getSpecialization.fulfilled, (state, action) => {
      state.loading = "complete_success";
      state.specializationList = action.payload.data;
    });
    builder.addCase(getSpecialization.rejected, (state) => {
      state.authLoading = "complete_failure";
    });

    builder.addCase(getGenderList.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getGenderList.fulfilled, (state, action) => {
      state.loading = "complete_success";
      state.genderList = action.payload.data;
    });
    builder.addCase(getGenderList.rejected, (state) => {
      state.authLoading = "complete_failure";
    });

    builder.addCase(getExperienceList.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getExperienceList.fulfilled, (state, action) => {
      state.loading = "complete_success";
      state.experienceList = action.payload.data;
    });
    builder.addCase(getExperienceList.rejected, (state) => {
      state.authLoading = "complete_failure";
    });

    builder.addCase(getEmploymentType.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getEmploymentType.fulfilled, (state, action) => {
      state.loading = "complete_success";
      state.employementList = action.payload.data;
    });
    builder.addCase(getEmploymentType.rejected, (state) => {
      state.authLoading = "complete_failure";
    });

    builder.addCase(getQualification.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getQualification.fulfilled, (state, action) => {
      state.loading = "complete_success";
      state.qualificationList = action.payload.data;
    });
    builder.addCase(getQualification.rejected, (state) => {
      state.authLoading = "complete_failure";
    });

    builder.addCase(getCityNameByCountry.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getCityNameByCountry.fulfilled, (state, action) => {
      state.loading = "complete_success";
      state.locationList = action.payload;
    });
    builder.addCase(getCityNameByCountry.rejected, (state) => {
      state.authLoading = "complete_failure";
    });
  },
});

export const {} = globalSlice.actions;
export default globalSlice.reducer;
