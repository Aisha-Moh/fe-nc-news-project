import { useState, useEffect } from "react";
import { fetchArticles } from "../utils/api";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles()
      .then((response) => {
        console.log(response, "<><>");
        console.log(response.data, "<< article data in .then");
        setArticles(response.data.articles);
      })
      .catch((err) => {
        console.log("inside .catch");
        console.log(err, "<< err");
      });
  }, []);

  return (
    <section>
      <ul key="articles">
        {articles.map((article) => {
          return (
            <li key={article.title}>
              <h3>{article.title}</h3>
              <p>Author: {article.author}</p>
              <p>Topic: {article.topic}</p>
              <img src={article.article_img_url}></img>
              <p>Votes: {article.votes}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
