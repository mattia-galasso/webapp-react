import axios from "axios";
import { useEffect, useState } from "react";
import MoviesList from "../components/movies/MoviesList";
import Loading from "../components/Loading";

const apiURL = import.meta.env.VITE_API_URL;

export default function Homepage() {
  //* useState Constant
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //* useEffect
  useEffect(fetchMoviesList, []);

  //* API Index Call
  function fetchMoviesList() {
    setIsLoading(true);
    axios.get(apiURL + "/movies").then((res) => {
      setMoviesList(res.data.result);
      setIsLoading(false);
    });
  }

  return (
    <>
      <div className="container">
        <h1 className="my-4">Movies List</h1>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="movieList">
            <MoviesList isMoviesList={moviesList} />
          </div>
        )}
      </div>
    </>
  );
}
