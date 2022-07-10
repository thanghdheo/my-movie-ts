import React, { useEffect, useReducer, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";
import Home from "./components/Home";
import { getMoviesPlayNow } from "./APIs";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movie from "./components/Movie/Movie";
import MovieDetail from "./components/Movie/Movie";
import { BounceLoader } from "react-spinners";
import Loading from "./components/Loading";
import { AppDispatch, RootState } from "./Interface/Movie";
import { fetchMovies } from "./Redux/MoviesSlice";
import styled from "styled-components";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  const movies = useSelector((state: RootState) =>
    _.get(state, "moviesReducer.movies")
  );

  const loading = useSelector((state: RootState) => state.moviesReducer.status);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  if (loading) return <Loading />;

  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/detail/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </SkeletonTheme>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
