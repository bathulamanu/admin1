import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../httpRequest'

const initialState = {
  hospitalsList: [],
  hospitalDetail: {},
  loading: '',
  hospitalPostData: {},
}

export const getHospitalsList = createAsyncThunk(
  'getHospitalsList',
  async (_, thunkAPI) => {
    try {
      const response = await api.get('/getHospitalDetails')
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message,
      )
    }
  },
)
export const getHospitalDetails = createAsyncThunk(
  'getHospitalDetails',
  async (id, thunkAPI) => {
    try {
      const response = await api.get(`getEachHospitalDetails/${id}`)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message,
      )
    }
  },
)

export const addHospitals = createAsyncThunk(
  'addHospitals',
  async (data, thunkAPI) => {
    console.log('data when we are posting', data)
    try {
      const response = await api.post('/addHospitalDetails', data)
      console.log('Posted successfully', response.data)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message,
      )
    }
  },
)

const hospitalSlice = createSlice({
  name: 'hospitals',
  initialState,
  reducers: {
    handlePostHospital: (state, action) => {
      state.hospitalPostData = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getHospitalsList.pending, (state) => {
      state.loading = 'pending'
    })
    builder.addCase(getHospitalsList.fulfilled, (state, action) => {
      state.loading = 'complete_success'
      state.hospitalsList = action.payload?.data
    })
    builder.addCase(getHospitalsList.rejected, (state) => {
      state.authLoading = 'complete_failure'
    })

    builder.addCase(getHospitalDetails.pending, (state) => {
      state.loading = 'pending'
    })
    builder.addCase(getHospitalDetails.fulfilled, (state, action) => {
      state.loading = 'complete_success'
      // console.log("jksakgujcfjdhbk", action.payload);
      state.hospitalDetail = action?.payload?.data
    })
    builder.addCase(getHospitalDetails.rejected, (state) => {
      state.authLoading = 'complete_failure'
    })
  },
})

export const { handlePostHospital } = hospitalSlice.actions
export default hospitalSlice.reducer
