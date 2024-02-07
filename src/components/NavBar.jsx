import { Link } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav className="top-navbar">
        <div className="nav-left">
          <Link to="/" className="home-link">
            Home
          </Link>
        </div>
        <div className="topics-dropdown">
          <button className="dropbtn">Article topics</button>
          <div class="dropdown-content">
            <Link to="/" className="coding-link">
              Coding
            </Link>
            <Link to="/" className="football-link">
              Football
            </Link>
            <Link to="/" className="cooking-link">
              Cooking
            </Link>
          </div>
        </div>

        <div className="nav-right">
          <Link to="/" className="login-link">
            Login
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
