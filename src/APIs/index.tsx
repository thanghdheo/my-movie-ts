import axios from "axios";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../Interface/Movie";

export const getMoviesPlayNow = async () => {
  const res = await axios.get(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=cc1b8866dc009b7351ac814cdfbd9238&language=en-US&page=1"
  );
  return res;
};

export const getMovie = async (id: string | undefined) => {
  const res = axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=cc1b8866dc009b7351ac814cdfbd9238&language=en-US`
  );
  return res;
};
