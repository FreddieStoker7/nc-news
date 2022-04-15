import { useEffect, useState} from "react";
import { fetchIndividualArticle, fetchArticleComments } from '../apiRequests/api'
import { useParams } from "react-router-dom";
import Votes from './Votes.jsx'
import CommentCard from './CommentCard'
import AddComment from "./AddComment";

export default function IndividualArticleInFull () {

const [individualArticle, setIndividualArticle] = useState([])
const {article_id} = useParams()
const [allComments, setAllComments] = useState([])



useEffect(() => {
    fetchIndividualArticle(article_id).then((article) => {
        setIndividualArticle(article)
        })
    },[article_id])

useEffect(() => {
    fetchArticleComments(article_id).then((comments) => {
        setAllComments(comments)
    })
}, [allComments])

    

    return(
        <div>
            <div className="full-article">
            <h2 className="article-title">{individualArticle.title}</h2>
            <h3>{individualArticle.topic}</h3>
            <h3>by: {individualArticle.author}</h3>
            <p>{individualArticle.created_at}</p>
            <p>{individualArticle.body}</p>
            <Votes article={individualArticle}/>
            </div>
            <AddComment article_id={individualArticle.article_id}/>
            <section>
            {allComments.map((comment) => {
                return (
                    <div key={comment.comment_id}>
                        <CommentCard comment={comment} article_id={article_id}/>
                    </div>
                )
            })}
            </section>
        
        </div>
    )
    }
        

