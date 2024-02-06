import { useEffect, useState } from "react";
import { fetchArticleById } from "../utils/api";
import { useParams } from "react-router-dom";

const ArticleCard = () => {
  const [articleCard, setArticleCard] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticleById(article_id).then((response) => {
      setArticleCard(response.data.article);
    });
  }, []);

  return (
    <>
      <h3>{articleCard.title}</h3>
      <p>Author: {articleCard.author}</p>
      <p>Votes: {articleCard.votes}</p>
      <img src={articleCard.article_img_url}></img>
      <p>{articleCard.body}</p>
      <button>Comments</button>
    </>
  );
};
export default ArticleCard;
