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

export const fetchUsers = () => {
  return ncNewsAPI.get("/users");
};

export const patchVotes = (article_id, votes) => {
  return ncNewsAPI
    .patch(`/articles/${article_id}`, { inc_votes: votes })
    .then((response) => {
      return response.data.inc_votes;
    });
};
export const postComment = (article_id, username, body) => {
  return ncNewsAPI.post(`/articles/${article_id}/comments`, {
    username: username,
    body: body,
  });
};

export const deleteComment = (comment_id) => {
  return ncNewsAPI.delete(`comments/${comment_id}`);
};
