import { useMoviesFunction } from "../contexts/MoviesContext";
import MoviesList from "../components/movies/MoviesList";

export default function Homepage() {
  const { moviesList } = useMoviesFunction();

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
