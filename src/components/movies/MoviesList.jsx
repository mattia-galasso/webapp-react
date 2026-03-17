export default function MoviesList({ isMoviesList }) {
  return (
    <>
      {isMoviesList.map((movie) => (
        <ul key={movie.id} className="movieList">
          <li>
            <img src={movie.image} alt={movie.title} className="image" />
          </li>
          <li>{movie.title}</li>
        </ul>
      ))}
    </>
  );
}
