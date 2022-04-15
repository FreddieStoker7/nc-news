import { useState, useEffect } from "react";
import { changeVotes } from "../apiRequests/api";

import {HiThumbDown, HiThumbUp} from 'react-icons/hi';

export default function Votes ({article}) {
    const [currentVotes, setVotes] = useState(0)
    

        function handleUpvote () {
            setVotes(currentVotes + 1)
            changeVotes(article.article_id, 1)
        }
        function handleDownvote () {
            setVotes(currentVotes - 1)
            changeVotes(article.article_id, -1)
        }
        
        return (
            <section className="like-box">
            <HiThumbUp size={40} class="reaction-button" onClick={handleUpvote}/>
            <HiThumbDown size={40} color={"#245127127"} class="reaction-button" onClick={handleDownvote}/>
            <p>current votes: {article.votes + currentVotes}</p>
            </section>
        )


        
}