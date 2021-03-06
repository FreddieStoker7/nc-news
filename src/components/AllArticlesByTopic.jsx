import { useEffect, useState } from "react";
import { fetchAllArticles } from "../apiRequests/api";
import ArticleCard from "./ArticleCard.jsx";
import { useParams } from "react-router-dom";
import SortByTopics from "./SortByTopics";
import ErrorPage from "./ErrorPage";

export default function AllArticlesByTopic() {
  const [allArticlesByTopic, setAllArticlesByTopic] = useState([]);
  const [loading, isLoading] = useState(true);
  const [sortBy, setSortBy] = useState('created_at')
  const [orderBy, setOrderBy] = useState('desc')
  const [error, setError] = useState(null)

  const { topic } = useParams();


  useEffect(() => {
    isLoading(true);
    fetchAllArticles(topic, sortBy, orderBy).then((articles) => {
      setAllArticlesByTopic(articles);
      isLoading(false);
      setError(null)
    }).catch(({ response: {data: { msg }, status }}) => {
      setError({ status, msg });
      isLoading(false);
    })
  }, [topic, sortBy, orderBy]);


  if (loading)
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
    

    if (error) return (
    <ErrorPage error={error}/>
    )

  return (
    <>
      <SortByTopics
        allArticlesByTopic={allArticlesByTopic}
        setAllArticlesByTopic={setAllArticlesByTopic}
        sortBy={sortBy}
        setSortBy={setSortBy}
        orderBy={setOrderBy}
        setOrderBy={setOrderBy}
      />
      <section>
        {allArticlesByTopic.map((article) => {
          return (
            <div>
              <ArticleCard article={article} />
            </div>
          );
        })}
      </section>
    </>
  );
}
