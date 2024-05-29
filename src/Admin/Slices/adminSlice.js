import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../httpRequest'

const initialState = {
  adminLogin: {},
  loading: '',
}

export const getUserLogin = createAsyncThunk(
  'getDoctorsList',
  async (data, thunkAPI) => {
    try {
      const response = await api.post('/employeeOrAdminLogin', data)
      console.log('The data after login', response)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message,
      )
    }
  },
)

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserLogin.pending, (state) => {
      state.loading = 'pending'
    })
    builder.addCase(getUserLogin.fulfilled, (state, action) => {
      state.loading = 'complete_success'
      state.adminLogin = action?.payload?.data
      const user = action?.payload?.data
      // console.log("dkjhcksdghljh  ", user);
      // localStorage.setItem("user", user);
    })
    builder.addCase(getUserLogin.rejected, (state) => {
      state.authLoading = 'complete_failure'
    })
  },
})

export const {} = adminSlice.actions
export default adminSlice.reducer
