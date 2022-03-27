import {useEffect, useState} from 'react'
import { fetchAllArticles } from '../apiRequests/api'
import ArticleCard from './ArticleCard.jsx'


export default function AllArticles () {
const [allArticles, setAllArticles] = useState([])

useEffect(() => {
    fetchAllArticles().then((articles) => {
        setAllArticles(articles)
    })
},[])

return (
    <section>
        {allArticles.map((article) => {
            return (
                
                <div> 
                    <ArticleCard article={article} />
                </div>
            )
        })}
    </section>
)
}