import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../data/baseUrl";
import { apiKey } from "../data/apiKey";

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async () => {
    const response = await fetch(baseUrl + apiKey + '&q=29681&days=3')
    if (!response.ok) {
      return Promise.reject('Unable to fetch, status: ' + response.status)
    }  
    const data = await response.json()
    return data
  }
)

const initialState = {
  city: '',
  state: '',
  currTemp: 0,
  tempHi: 0,
  tempLow: 0,
  currCondition: '',
  windSpeed: 0,
  isLoading: true,
  errMsg: ''
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchWeather.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchWeather.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = ''
      state.city = 'JumboDumbo'
    },
    [fetchWeather.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error ? action.error.message : 'Fetch failed'
    }
  }
}, initialState);

export default weatherSlice.reducer;
