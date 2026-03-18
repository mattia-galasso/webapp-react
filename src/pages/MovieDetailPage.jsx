import { Link } from "react-router";
import Loading from "../components/Loading";
import MovieDetail from "../components/movies/MovieDetail";
import MovieReviews from "../components/movies/MovieReviews";
import { useMoviesFunction } from "../contexts/MoviesContext";

export default function MovieDetailPage() {
  const { isMovieDetail, isLoading } = useMoviesFunction();

  return (
    <>
      <div className="container">
        <div className="detail-header">
          <h2 className="my-4">
            <small>Movie Detail:</small> {isMovieDetail.title}
          </h2>
          <Link to={`/`} className="btn btn-primary">
            Go Back
          </Link>
        </div>

        {isLoading ? (
          <Loading />
        ) : (
          <div className="">
            <MovieDetail movie={isMovieDetail} />
            <MovieReviews reviews={isMovieDetail.reviews} />
          </div>
        )}
      </div>
    </>
  );
}
