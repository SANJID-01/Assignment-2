const MovieCard = ({ movie, onSeeDetails }) => {
  const releaseDate = movie.premiered || "N/A";
  const rating = movie.rating?.average || "N/A";

  return (
    <div className="movie-card">
      <div className="movie-image-container">
        {movie.image?.medium ? (
          <img
            className="movie-image"
            src={movie.image.medium}
            alt={movie.name}
          />
        ) : (
          <div className="movie-placeholder">No Poster</div>
        )}
      </div>

      <div className="movie-card-content">
        <h3>{movie.name}</h3>

        <div className="movie-meta">
          <span>⭐ {rating}</span>
          <span>•</span>
          <span>📅 {releaseDate}</span>
        </div>

        <button
          className="details-button"
          type="button"
          onClick={() => onSeeDetails(movie)}
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
