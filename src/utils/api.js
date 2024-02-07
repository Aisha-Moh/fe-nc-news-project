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

export const fetchComments = (article_id) => {
  return ncNewsAPI.get(`/articles/${article_id}/comments`);
};

export const patchVotes = (article_id) => {
  return ncNewsAPI
    .patch(`/articles/${article_id}`, { inc_votes: 1 })
    .then((response) => {
      return response.data.inc_votes;
    });
};
