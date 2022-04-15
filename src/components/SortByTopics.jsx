// import { fetchAllArticlesByQuery } from "../apiRequests/api";
// import {useEffect, useState} from 'react'
// import { useNavigate } from 'react-router';

export default function SortByTopics ({allArticlesByTopic, setAllArticlesByTopic, sortBy, setSortBy, orderBy, setOrderBy}) {
   
    // const [sortBy, setSortBy] = useState('created_at')
    // const [orderBy, setOrderBy] = useState('desc')


//   useEffect(() => {
//     fetchAllArticlesByQuery(sortBy, orderBy).then((articles) => {
//         setAllArticlesByTopic(articles)
//     })
// },[sortBy, orderBy])


  return (
    <div className="sort-by-div-all">
      <div class="select-dropdown">
      <select name="sort-by" onChange={(e) => setSortBy(e.target.value)}>
        <option value="created_at">Created at</option>
        <option value="title">Title</option>
        <option value="votes">Votes</option>
        <option value="author">Author</option>
      </select>
      </div>
      <button className="button-19" value="asc" onClick={(e) => setOrderBy(e.target.value)}>Ascending</button>
      <button className="button-19" value="desc" onClick={(e) => setOrderBy(e.target.value)}>Descending</button>
      
    </div>
  );
}