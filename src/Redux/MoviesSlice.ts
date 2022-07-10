import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { getMovie, getMoviesPlayNow } from "../APIs";
import { Movie, Movies } from "../Interface/Movie";

interface IState {
  movies: Movies[];
  movie: Movie;
  status: boolean;
}

const initialState: IState = {
  movies: [],
  movie: {},
  status: false,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    SET_LOADING: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {
    builder
      .addCase(fetchMovies.pending, (state, action) => {
        state.status = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.status = false;
      })
      .addCase(fetchMovie.pending, (state, action) => {
        state.status = true;
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.movie = action.payload;
        state.status = false;
      });
  },
});

export const fetchMovies = createAsyncThunk("movies/fetch", async () => {
  const res = getMoviesPlayNow();
  return (await res).data.results;
});

export const fetchMovie = createAsyncThunk(
  "movie/fecth",
  async (id: string | undefined) => {
    const res = getMovie(id);
    return (await res).data;
  }
);

export default movieSlice.reducer;
export const { SET_LOADING } = movieSlice.actions;
