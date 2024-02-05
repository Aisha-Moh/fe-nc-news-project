import { useEffect, useState } from "react";
import { fetchArticles } from "../utils/api";

const ArticleCard = () => {
  const [articleCard, setArticleCard] = useState([]);

  useEffect(() => {
    fetchArticles(1).then((response) => {
      console.log(response.data.article);
      setArticleCard(response.data.article);
    });
  }, []);
};
// return articleCard ?(
//     <>
//     <h3>{articleCard.title}</h3>
//     <img src={articleCard.article_img_url}></img>
//     </>
// );
export default ArticleCard;
