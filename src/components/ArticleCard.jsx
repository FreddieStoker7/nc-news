import { Link } from "react-router-dom"
export default function ArticleCard ({article}) {
    return (
        <article className="article-card" key={article.article_id}> 
            <h2><Link to={`/articles/${article.article_id}`}>{article.title}</Link></h2>
            <h3>{article.topic}</h3>
            <h4>{article.author}</h4>
            <p>{article.created_at}</p>
        </article>
    )
}