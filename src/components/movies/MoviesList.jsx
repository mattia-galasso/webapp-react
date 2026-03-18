import { Link } from "react-router";
import { useMoviesFunction } from "../../contexts/MoviesContext";

export default function MoviesList({ isMoviesList }) {
  const { setMovieSelected } = useMoviesFunction();

  return (
    <>
      {isMoviesList.map((movie) => (
        <div
          key={movie.id}
          className="card movieCard"
          style={{ width: "18rem" }}
        >
          <img
            src={movie.image}
            className="card-img-top imageMovieCard"
            alt={movie.title}
          />
          <div className="card-body">
            <div className="body-movies-card">
              <h5 className="card-title">{movie.title}</h5>
              <div className="vote-card">
                <small>Vote:</small>
                <p className="card-text">{parseInt(movie.avg_vote)}/5</p>
              </div>
            </div>
            <Link
              to={`/${movie.id}`}
              className="btn btn-primary"
              onClick={(e) => {
                setMovieSelected(movie.id);
              }}
            >
              See More
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
