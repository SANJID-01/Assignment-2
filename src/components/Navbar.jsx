import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link className="brand" to="/">
          🎬 MovieExplorer
        </Link>

        <div className="nav-links">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-button" to="/movies">
            Movies
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
