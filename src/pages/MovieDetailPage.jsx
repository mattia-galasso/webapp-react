import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import axios from "axios";
import Loading from "../components/Loading";
import MovieDetail from "../components/movies/MovieDetail";
import MovieReviews from "../components/reviews/MovieReviews";
import ReviewForm from "../components/reviews/ReviewForm";

const apiURL = import.meta.env.VITE_API_URL;

export default function MovieDetailPage() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //* API Show Call
  function fetchMovieDetail() {
    setIsLoading(true);
    axios.get(apiURL + `/movies/${id}`).then((res) => {
      setMovieDetail(res.data.result);
      setIsLoading(false);
    });
  }

  //* useEffect
  useEffect(fetchMovieDetail, []);

  return (
    <>
      <div className="container">
        <div className="detail-header">
          <h2 className="my-4">
            <small>Movie Detail:</small> {movieDetail.title}
          </h2>
          <Link to={`/`} className="btn btn-primary">
            Go Back
          </Link>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="">
            <MovieDetail movie={movieDetail} />
            <MovieReviews reviews={movieDetail.reviews} />
            <ReviewForm movieID={id} afterFormSubmit={fetchMovieDetail} />
          </div>
        )}
      </div>
    </>
  );
}
