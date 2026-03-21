import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import axios from "axios";
import MovieDetail from "../components/movies/MovieDetail";
import MovieReviews from "../components/reviews/MovieReviews";
import ReviewForm from "../components/reviews/ReviewForm";
import { useLoadingFunction } from "../contexts/LoadingContext";

const apiURL = import.meta.env.VITE_API_URL;

export default function MovieDetailPage() {
  const { startLoading, endLoading } = useLoadingFunction();
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);

  //* useEffect
  useEffect(fetchMovieDetail, []);

  //* API Show Call
  function fetchMovieDetail() {
    startLoading();
    axios.get(apiURL + `/movies/${id}`).then((res) => {
      setMovieDetail(res.data.result);
      endLoading();
    });
  }

  if (!movieDetail || !movieDetail.reviews) return <></>;

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
        <div className="">
          <MovieDetail movie={movieDetail} />
          <MovieReviews reviews={movieDetail.reviews} />
          <ReviewForm movieID={id} afterFormSubmit={fetchMovieDetail} />
        </div>
      </div>
    </>
  );
}
