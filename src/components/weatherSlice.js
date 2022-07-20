import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  city: [],
  state: [],
  currTemp: 0,
  tempHi: 0,
  tempLow: 0,
  currCondition: [],
  windSpeed: 0,
  isLoading: true,
};

const weatherSlice = createSlice({
  name: "weather",
  initalState,
});

export default weatherSlice.reducer;
