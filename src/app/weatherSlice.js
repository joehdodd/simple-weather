import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  current: {},
  forecast: {},
};

export const fetchCurrent = createAsyncThunk(
  "weather/fetchCurrent",
  async (coords) => {
    const currentRes = await axios.get(
      `${process.env.REACT_APP_WEATHER_BASE_URL}/weather?units=imperial&lat=${coords.lat}&lon=${coords.lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );
    return currentRes.data;
  }
);

export const fetchForecast = createAsyncThunk(
  "weather/fetchForecast",
  async (coords) => {
    const forecastRes = await axios.get(
      `${process.env.REACT_APP_WEATHER_BASE_URL}/forecast/daily?units=imperial&lat=${coords.lat}&lon=${coords.lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );
    return forecastRes.data;
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCurrent.fulfilled, (state, action) => {
      state.current = { ...action.payload };
    });
    builder.addCase(fetchForecast.fulfilled, (state, action) => {
      state.forecast = { ...action.payload };
    });
  },
});

// export const {} = weatherSlice.actions;

export default weatherSlice.reducer;
