import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  city: [],
  state: [],
  currTemp: 9,
  tempHi: 9,
  tempLow: 9,
  currCondition: [],
  windSpeed: 9,
  isLoading: true,
};

const weatherSlice = createSlice({
  name: "weather",
  initalState,
  reducers: {},
});

export default weatherSlice.reducer;
