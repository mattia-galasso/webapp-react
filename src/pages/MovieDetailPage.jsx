import Loading from "../components/Loading";
import MovieDetail from "../components/movies/MovieDetail";
import MovieReviews from "../components/movies/MovieReviews";
import { useMoviesFunction } from "../contexts/MoviesContext";

export default function MovieDetailPage() {
  const { isMovieDetail, isLoading } = useMoviesFunction();

  return (
    <>
      <div className="container">
        <h1 className="my-4">
          <small>Movie Detail:</small> {isMovieDetail.title}
        </h1>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="detail-card">
            <MovieDetail movie={isMovieDetail} />
            <MovieReviews reviews={isMovieDetail.reviews} />
          </div>
        )}
      </div>
    </>
  );
}
