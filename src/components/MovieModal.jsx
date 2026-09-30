const MovieModal = ({ movie, onClose }) => {
  if (!movie) {
    return null;
  }

  const releaseDate = movie.premiered || "Not available";
  const rating = movie.rating?.average || "N/A";
  const genre =
    movie.genres && movie.genres.length > 0
      ? movie.genres[0]
      : "Not available";

  return (
    <div className="modal-overlay">
      <div className="movie-modal">
        <button className="modal-close" type="button" onClick={onClose}>
          ✕
        </button>

        <div className="modal-image-container">
          {movie.image?.original ? (
            <img
              className="modal-image"
              src={movie.image.original}
              alt={movie.name}
            />
          ) : movie.image?.medium ? (
            <img
              className="modal-image"
              src={movie.image.medium}
              alt={movie.name}
            />
          ) : (
            <div className="movie-placeholder">No Poster</div>
          )}
        </div>

        <div className="modal-content">
          <h2>{movie.name}</h2>

          <div className="modal-meta">
            <span>⭐ Rating: {rating}</span>
            <span>•</span>
            <span>📅 Release: {releaseDate}</span>
          </div>

          <p className="modal-genre">
            <strong>Genre:</strong> {genre}
          </p>

          <div className="modal-summary">
            <h3>Overview</h3>
            {movie.summary ? (
              <p>{movie.summary}</p>
            ) : (
              <p>No summary available.</p>
            )}
          </div>

          <button className="close-button" type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
