import { useState, useEffect } from "react";
import { fetchUsers } from "../utils/api";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetchUsers()
      .then((response) => {
        setUsers(response.data.users);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div className="loading-container">
        <p>{`Loading users please wait...`}</p>
      </div>
    );

  if (error) return <Error error={error} />;

  return (
    <main>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.username}>
              <UserCard user={user} />
              {/* <Link to={"/users"}>
                <h3>Username: {user.username}</h3>
                <p>Name: {user.name}</p>
                <img className="user-img" src={user.avatar_url} />
              </Link> */}
            </li>
          );
        })}
      </ul>
    </main>
  );
}

{
  /* <section>
  <ul key="articles">
    {articles.map((article) => {
      return (
        <>
          <li key={article.title}>
            <Link to={`/articles/${article.article_id}`}>
              <h3>{article.title}</h3>
              <p>Author: {article.author}</p>
              <p>Topic: {article.topic}</p>
              <img src={article.article_img_url}></img>
              <p>Votes: {article.votes}</p>
            </Link>
          </li>
        </>
      );
    })}
  </ul>
</section>; */
}
