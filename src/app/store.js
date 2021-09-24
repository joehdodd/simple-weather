import { configureStore } from "@reduxjs/toolkit";
import weather from "./weatherSlice";

export const store = configureStore({
  reducer: {
    weather,
  },
});
