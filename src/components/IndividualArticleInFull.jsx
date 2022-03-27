import { useEffect, useState} from "react";
import { fetchIndividualArticle, fetchArticleComments } from '../apiRequests/api'
import { useParams } from "react-router-dom";
import Votes from './Votes.jsx'
import CommentCard from './CommentCard'

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
        console.log(comments)
        setAllComments(comments)
    })
}, [article_id])
console.log(allComments)
    

    return(
        <article>
            <h2>{individualArticle.title}</h2>
            <h3>{individualArticle.topic}</h3>
            <h3>{individualArticle.author}</h3>
            <p>{individualArticle.created_at}</p>
            <p>{individualArticle.body}</p>
            <Votes article={individualArticle}/>
            <section>
            {allComments.map((comment) => {
                return (
                    <div>
                        <CommentCard comment={comment} />
                    </div>
                )
            })}
            </section>
        </article>
    )
    }
        

