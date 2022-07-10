import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../Redux/MoviesSlice";
const rootReducer = {
  moviesReducer: moviesReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});
