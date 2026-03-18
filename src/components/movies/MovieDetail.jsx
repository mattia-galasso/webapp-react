export default function MovieDetail({ movie }) {
  return (
    <>
      <div key={movie.id} className="movie-detail-card">
        <img
          src={movie.image}
          className="card-img-top detail-image"
          alt={movie.title}
        />
        <div className="detail-items">
          <div className="detail-title">
            <h5 className="">{movie.title}</h5>
          </div>
          <ul className="detail-list">
            <li className="">
              <small className="text-body-secondary">Director: </small>
              <p className="detail-text">{movie.director}</p>
            </li>
            <li className="">
              <small className="text-body-secondary">Genre: </small>
              <p className="detail-text">{movie.genre}</p>
            </li>
            <li className="">
              <small className="text-body-secondary">Release Year: </small>
              <p className="detail-text">{movie.release_year}</p>
            </li>
          </ul>
          <div className="abstract-detail">
            <small className="text-body-secondary">Abstract: </small>
            <p className="detail-text">{movie.abstract}</p>
          </div>
        </div>
      </div>
    </>
  );
}
