
export default function ArticleCard ({topic}) {
    return (
        <article key={topic.slug}> 
            <h2>{topic.slug}</h2>
            <h3>{topic.description}</h3>
        </article>
    )
}