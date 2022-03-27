import { useEffect, useState} from "react";
import { fetchAllArticles } from '../apiRequests/api'
import ArticleCard from './ArticleCard.jsx'
import { useParams } from "react-router-dom";

export default function AllArticlesByTopic () {
    const [allArticlesByTopic, setAllArticlesByTopic] = useState([])
    const {topic} = useParams()
    

    useEffect(() => {
        fetchAllArticles(topic).then((articles) => {
        setAllArticlesByTopic(articles)
        })
    
    },[topic])

return (
    <section>
        {allArticlesByTopic.map((article) => {
            return (
                <div>
                    <ArticleCard article={article} />
                </div>
            )
        })}
    </section>
)
}

