import axios from "axios";
import { useEffect, useState } from "react";
import MoviesList from "../components/movies/MoviesList";
import { useLoadingFunction } from "../contexts/LoadingContext";
const apiURL = import.meta.env.VITE_API_URL;

export default function Homepage() {
  const { startLoading, endLoading } = useLoadingFunction();
  //* useState Constant
  const [moviesList, setMoviesList] = useState([]);

  //* useEffect
  useEffect(fetchMoviesList, []);

  //* API Index Call
  function fetchMoviesList() {
    startLoading();
    axios.get(apiURL + "/movies").then((res) => {
      setMoviesList(res.data.result);
      endLoading();
    });
  }

  return (
    <>
      <div className="container">
        <h1 className="my-4">Movies List</h1>
        <div className="movieList">
          <MoviesList isMoviesList={moviesList} />
        </div>
      </div>
    </>
  );
}
