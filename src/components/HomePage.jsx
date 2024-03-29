import Header from "./Header";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <Header className="Header" text="NC News" />
      <h3>For all your article needs..</h3>
      <p>
        Click
        <Link to="/articles">
          <button className="home-btn">here</button>
        </Link>
        to see a range of articles!
      </p>
    </>
  );
}
