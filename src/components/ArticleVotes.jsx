import { useState } from "react";
import { patchVotes } from "../utils/api";

export default function ArticleVotes({ articleCard }) {
  const [votes, setVotes] = useState(0);

  function handleUpVote(event) {
    event.preventDefault(
      setVotes(votes + 1),
      patchVotes(articleCard.article_id)
    );
  }
  function handleDownVote(event) {
    event.preventDefault(
      setVotes(votes - 1),
      patchVotes(articleCard.article_id)
    );
  }
  return (
    <>
      <p>Votes: {votes + articleCard.votes}</p>
      <button onClick={handleUpVote}>Vote Up 👍</button>
      <button onClick={handleDownVote}>Vote Down 👎</button>
    </>
  );
}
