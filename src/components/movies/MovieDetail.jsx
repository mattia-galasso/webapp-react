import { Link } from "react-router";

export default function MovieDetail({ movie }) {
  return (
    <>
      <div key={movie.id} className="card" style={{ width: "20rem" }}>
        <img
          src={movie.image}
          className="card-img-top detail-image"
          alt={movie.title}
        />
        <div className="card-body">
          <h5 className="card-title my-1">{movie.title}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <small className="text-body-secondary">Director: </small>
            <p className="detail-text">{movie.director}</p>
          </li>
          <li className="list-group-item">
            <small className="text-body-secondary">Genre: </small>
            <p className="detail-text">{movie.genre}</p>
          </li>
          <li className="list-group-item">
            <small className="text-body-secondary">Release Year: </small>
            <p className="detail-text">{movie.release_year}</p>
          </li>
          <li className="list-group-item">
            <small className="text-body-secondary">Abstract: </small>
            <p className="detail-text">{movie.abstract}</p>
          </li>
        </ul>
        <div className="card-body">
          <Link to={`/`} className="btn btn-primary">
            Go Back
          </Link>
        </div>
      </div>
    </>
  );
}
