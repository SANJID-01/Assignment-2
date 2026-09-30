import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import { getMovies } from "../services/get-movies";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError("");

      try {
        const result = await getMovies(searchQuery.trim());
        setMovies(result);
      } catch (error) {
        console.log(error);
        setError("Something went wrong while loading movies.");
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSeeDetails = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  let movieContent;

  if (loading) {
    movieContent = <div className="status-message">Loading movies...</div>;
  } else if (error) {
    movieContent = (
      <div className="status-message error-message">{error}</div>
    );
  } else if (movies.length === 0) {
    movieContent = <div className="status-message">No movies found.</div>;
  } else {
    movieContent = (
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onSeeDetails={handleSeeDetails}
          />
        ))}
      </div>
    );
  }

  return (
    <main className="movies-page">
      <section className="container movies-header">
        <header className="movies-topbar">
          <p className="section-label">MOVIE LIBRARY</p>
        </header>

        <h1>Explore Movies & Shows</h1>
        <p>Search for a title or browse all available shows from TVMaze.</p>

        <div className="search-box">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Search for a movie..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </section>

      <section className="container movies-section">{movieContent}</section>

      <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
    </main>
  );
};

export default Movies;
