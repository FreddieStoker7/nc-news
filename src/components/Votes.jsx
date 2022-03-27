import { useState, useEffect } from "react";
import { changeVotes } from "../apiRequests/api";

export default function Votes ({article}) {
    const [currentVotes, setVotes] = useState(0)
    

        function handleUpvote (e) {
            setVotes(currentVotes + 1)
            changeVotes(article.article_id, 1)
        }
        function handleDownvote (e) {
            setVotes(currentVotes - 1)
            changeVotes(article.article_id, -1)
        }
        return (
            <section>
            <button onClick={handleUpvote}>Upvote</button>
            <p>current votes: {article.votes + currentVotes}</p>
            <button onClick={handleDownvote}>Downvote</button>
            </section>
        )



}