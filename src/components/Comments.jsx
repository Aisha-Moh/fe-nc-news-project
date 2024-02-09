import { useState, useEffect, useContext } from "react";
import { fetchComments } from "../utils/api";
import { useParams } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { deleteComment } from "../utils/api";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const { article_id } = useParams();
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    fetchComments(article_id)
      .then((response) => {
        setComments(response.data.comments);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  function handleDelete(comment_id, author) {
    if (currentUser.username === author) {
      console.log(comments.author, "author");
      deleteComment(comment_id);
      alert(
        "Your comment has been deleted successfully! Please refresh the page."
      );
      //setComments();
    } else {
      alert("Sorry! You are not the author of this comment.");
    }
  }

  if (isLoading)
    return (
      <div className="loading-container">
        <p>{`Loading comments please wait...`}</p>
      </div>
    );

  if (error) return <Error error={error} />;

  return (
    <section>
      <div>
        <h2>Comments:</h2>
        <ul key="comments">
          {comments.map((comment) => {
            return (
              <>
                <li key={comment.title}>
                  <h3>{comment.body}</h3>
                  <h4>Commented by: {comment.author}</h4>
                  <p>Votes: {comment.votes}</p>
                  <button
                    onClick={() =>
                      handleDelete(comment.comment_id, comment.author)
                    }
                  >
                    Delete comment
                  </button>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
