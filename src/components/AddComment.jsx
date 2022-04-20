import {useState, useContext} from "react"
import { setNewComment } from "../apiRequests/api";
import { UserContext } from '../contexts/Users'

export default function AddComment (article_id) {
  const {singleUser, setSingleUser} = useContext(UserContext)
  const [comment, setComment] = useState('')
  const [isPending, setIsPending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newComment = {comment}
    setIsPending(true)
    setNewComment(article_id, newComment, singleUser).then(() => {
    setIsPending(false)
    setComment("")
    })
  }
 
    return (
       <div className="create-comment">
       <h3>Post a comment</h3>
       <form onSubmit={handleSubmit}>
        <input
          value={comment}
          type="text"
          required
          onChange={(e) => setComment(e.target.value)} />
          {!isPending && <button className="button-68">Add Comment</button>}
          {isPending && <button className="button-68" disabled>Adding Comment...</button>}
      </form>  
      </div>
    )
    }