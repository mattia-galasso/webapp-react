import { useMoviesFunction } from "../contexts/MoviesContext";
import MoviesList from "../components/movies/MoviesList";
import Loading from "../components/Loading";

export default function Homepage() {
  const { moviesList, isLoading } = useMoviesFunction();

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
