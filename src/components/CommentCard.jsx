import { useNavigate } from "react-router-dom";
import { deleteComment } from "../apiRequests/api";
import { useState } from "react";
export default function CommentCard({ comment, article_id}) {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false)

  const handleClick = () => {
      setIsPending(true)
    deleteComment(comment.comment_id).then((msg) => {
      console.log(msg);
      setIsPending(false)
      navigate(`/articles/${article_id}`)
    });
  };
  const date = new Date(Date.parse(comment.created_at))

  return (
    <div className="comment-card" key={comment.comment_id}>
      <h5 id="comment-author">{comment.author}</h5>
      <time style={{ textDecoration: 'none',
        color: '#807f7fee'}}>{date.toUTCString()}</time>
      <p id="comment-body">{comment.body}</p>
      <p>votes: <span id="votes-number">{comment.votes}</span></p>
      {!isPending && <button className='button-77'onClick={handleClick}>Delete Comment</button>}
      {isPending && <button disabled>Deleting Comment...</button>}
    </div>
  );
}
