import { useState, useEffect } from "react";
import { fetchComments } from "../utils/api";
import { useParams } from "react-router-dom";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    fetchComments(article_id).then((response) => {
      setComments(response.data.comments);
    });
  }, []);

  return (
    <section>
      <div>
        <h2>Comments:</h2>
      </div>
      <ul key="comments">
        {comments.map((comment) => {
          return (
            <>
              <li key={comment.title}>
                <h3>{comment.body}</h3>
                <h4>Commented by: {comment.author}</h4>
                <p>Votes: {comment.votes}</p>
              </li>
            </>
          );
        })}
      </ul>
    </section>
  );
}
