import { useEffect, useState} from "react";
import { fetchIndividualArticle, fetchArticleComments } from '../apiRequests/api'
import { useParams } from "react-router-dom";
import Votes from './Votes.jsx'
import CommentCard from './CommentCard'
import AddComment from "./AddComment";
import ErrorPage from "./ErrorPage";

export default function IndividualArticleInFull () {

const [individualArticle, setIndividualArticle] = useState([])
const {article_id} = useParams()
const [allComments, setAllComments] = useState([])
const [loading, setIsLoading] = useState(true)
const [error, setError] =useState(null)



useEffect(() => {
    fetchIndividualArticle(article_id).then((article) => {
        setIsLoading(false)
        setIndividualArticle(article)
        setError(null)
        })
        .catch(({ response: {data: { msg }, status }}) => {
            setError({ status, msg });
            setIsLoading(false);   
        })
    },[article_id])

useEffect(() => {
    fetchArticleComments(article_id).then((comments) => {
        setAllComments(comments)
        // setAllComments(allComments.sort((dateA, dateB) => dateA.created_at - dateB.created_at))
        })
}, [allComments])


// console.log(allComments)

const date = new Date(Date.parse(individualArticle.created_at))



if(loading) return <p>Loading...</p>
if (error) return <ErrorPage error={error}/>

    return(
        <div>
            <div className="full-article">
            <h2 className="article-title">{individualArticle.title}</h2>
            <h3>{individualArticle.topic}</h3>
            <h3>by: {individualArticle.author}</h3>
            <time style={{ textDecoration: 'none',
        color: '#807f7fee'}}>{date.toUTCString()}</time>
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
        

