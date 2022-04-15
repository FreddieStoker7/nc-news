import { useEffect, useState } from "react";
import { fetchAllArticles } from "../apiRequests/api";
import ArticleCard from "./ArticleCard.jsx";
import SortBy from "./SortBy";

export default function AllArticles() {
  const [allArticles, setAllArticles] = useState([]);
  const [loading, isLoading] = useState(true);
  const [sortBy, setSortBy] = useState('created_at')
    const [orderBy, setOrderBy] = useState('desc')
    const [topic, setTopic] = useState(null)
    const [error, setError] = useState(null)

  useEffect(() => {
    isLoading(true);
    fetchAllArticles(topic, sortBy, orderBy).then((articles) => {
      setAllArticles(articles);
      isLoading(false);
      setError(null)
    }).catch((error) => {
      setError(error.response.data.msg)
      isLoading(false)
    })
  }, [sortBy, orderBy]);
  
  console.log(sortBy)

  if (loading) return <h3>Loading...</h3>;
  return (
    <>
      <SortBy allArticles={allArticles} setAllArticles={setAllArticles} sortBy={sortBy} setSortBy={setSortBy} orderBy={orderBy} setOrderBy={setOrderBy} />
      <section>
        {allArticles.map((article) => {
          return (
            <div key={article.article_id}>
              <ArticleCard article={article} />
            </div>
          );
        })}
      </section>
    </>
  );
}
