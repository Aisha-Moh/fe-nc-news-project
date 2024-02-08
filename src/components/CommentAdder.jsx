import { useContext, useEffect, useState } from "react";
import { fetchArticleById, postComment } from "../utils/api";
import Comments from "./Comments";
import { useParams } from "react-router-dom";
import UserContext from "../contexts/UserContext";

export default function CommentAdder() {
  const [userComment, setUserComment] = useState("");
  const { article_id } = useParams();
  const { currentUser } = useContext(UserContext);

  function handleSubmit(event) {
    event.preventDefault();

    postComment(article_id, currentUser.username, userComment).then(
      (response) => {
        setUserComment("");
      }
    );
  }

  useEffect(() => {
    fetchArticleById(article_id);
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-comment">
          Tell us your thoughts:
          <input
            id="new-comment"
            type="text"
            value={userComment}
            placeholder="Type your comment here.."
            onChange={(event) => {
              setUserComment(event.target.value);
            }}
            required
          />
        </label>
        <button>Comment</button>
      </form>
      <Comments />
    </>
  );
}
