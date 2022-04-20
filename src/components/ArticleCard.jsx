import { Link } from "react-router-dom"
export default function ArticleCard ({article}) {
    const date = new Date(Date.parse(article.created_at))

    return (
        <div>
        <Link to={`/articles/${article.article_id}`} style={{ textDecoration: 'none'}}>
        <article className="article-card" key={article.article_id}> 
            <h2 id="article-card-title">{article.title}</h2>
            <h3>{article.topic}</h3>
            <h4>{article.author}</h4>
            <time style={{ textDecoration: 'none',
        color: '#807f7fee'}}>{date.toUTCString()}</time>
        <span id="article-votes"><h3>votes {article.votes}</h3></span>
        </article>
        </Link>
        </div>
    )
}