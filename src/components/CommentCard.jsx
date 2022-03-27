import { useState, useEffect } from "react";

export default function CommentCard (comment) {

    return(
        <div>
            <h5>{comment.author}</h5>
            <p>{comment.created_at}</p>
            <p>{comment.body}</p>
            <p>votes  {comment.votes}</p>
        </div>
    )
}
