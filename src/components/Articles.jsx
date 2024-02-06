import { useState, useEffect } from "react";
import { fetchArticles } from "../utils/api";
import { Link } from "react-router-dom";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles()
      .then((response) => {
        setArticles(response.data.articles);
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
        <p>{`Loading please wait...`}</p>
      </div>
    );

  return (
    <section>
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
    </section>
  );
}
