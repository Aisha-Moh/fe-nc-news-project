import { Link } from "react-router-dom";
import "../css/NavBar.css";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";

const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <>
      <nav className="top-navbar">
        <div className="nav-left">
          <Link to="/" className="home-btn">
            <button>Home</button>
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
          <Link to="/change-user" className="ChangeUser-btn">
            <button>Change User</button>
          </Link>
        </div>
        <div className="curr-user">
          <p>You are currently logged in as: {currentUser.username}</p>
          <img
            src={currentUser.avatar_url}
            alt={`avatar for user ${currentUser.username}`}
            className="avatar"
          ></img>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
