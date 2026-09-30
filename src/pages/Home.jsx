import { Link } from "react-router";

const Home = () => {
  return (
    <main>
      <section className="hero">
        <div className="hero-overlay">
          <div className="container hero-content">
            <p className="hero-label">MOVIE EXPLORER</p>
            <h1>Discover Your Next Favorite Show</h1>
            <p className="hero-description">
              Explore movies and TV shows, search for titles, and discover
              detailed information about the shows you love.
            </p>
            <Link className="hero-button" to="/movies">
              Explore Now
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">MOVIE EXPLORER</p>
            <h2>Everything You Need to Explore</h2>
            <p>
              Search for shows, browse available titles, and open a detailed
              view whenever you find something interesting.
            </p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Search Movies</h3>
              <p>Search for a specific movie or show by its title.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎬</div>
              <h3>Browse Shows</h3>
              <p>Browse available shows directly from the TVMaze API.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>See Details</h3>
              <p>
                Open a detailed modal with rating, genre, release date, and
                overview.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
