import axios from "axios";
const ncNewsAPI = axios.create({
  baseURL: "https://backend-project-u0dl.onrender.com/api",
});

export const fetchArticles = () => {
  return ncNewsAPI.get("/articles");
};
export const fetchArticleById = (article_id) => {
  return ncNewsAPI.get(`/articles/${article_id}`);
};
