import axios from "axios";
import { useEffect, useState } from "react";
import MoviesList from "../components/movies/MoviesList";

const apiURL = "http://localhost:3000/movies";

export default function Homepage() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(fetchMovies, []);

  function fetchMovies() {
    axios.get(apiURL).then((res) => {
      setMoviesList(res.data.result);
    });
  }

  return (
    <>
      <div className="container">
        <h1 className="my-4">Movies List</h1>
        <MoviesList isMoviesList={moviesList} />
      </div>
    </>
  );
}
