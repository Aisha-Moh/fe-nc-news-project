import axios from "axios";

export const fetchArticles = () => {
  return axios.get("https://backend-project-u0dl.onrender.com/api/articles/");
};

// export const fetchArticles = (articleId = "") => {
//   return axios.get("");
// };
