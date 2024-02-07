import { useEffect, useState } from "react";
import { fetchArticleById } from "../utils/api";
import { useParams, Link } from "react-router-dom";
import Comments from "./Comments";
import ArticleVotes from "./ArticleVotes";

export default function ArticleCard() {
  const [articleCard, setArticleCard] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticleById(article_id)
      .then((response) => {
        setArticleCard(response.data.article);
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
        <p>{`Loading article please wait...`}</p>
      </div>
    );

  if (error) return <Error error={error} />;

  return (
    <>
      <h3>{articleCard.title}</h3>
      <p>Author: {articleCard.author}</p>
      <img src={articleCard.article_img_url}></img>
      <p>{articleCard.body}</p>
      <ArticleVotes articleCard={articleCard} />
      <Link to={`/articles/${articleCard.article_id}/comments`}>
        <button>View All Comments</button>
      </Link>
      <Comments />
    </>
  );
}
