import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export default function SortBy({
  allArticles,
  setAllArticles,
  sortBy,
  setSortBy,
  orderBy,
  setOrderBy,
}) {
  let navigate = useNavigate();

  const changeTopic = (topic) => {
    navigate(`/topics/${topic}`);
  };

  const toggleSortBy = (sortByQuery) => {
setSortBy(sortByQuery)
  }




  return (
    <div className='sort-by-div-all'>
       <div className="select-dropdown"> 
       <select name="sort-by" onChange={(e) => setSortBy(e.target.value)}>
       <option selected disabled>Sort by:</option>
        <option value="created_at">Created at</option>
        <option value="title">Title</option>
        <option value="votes">Votes</option>
        <option value="author">Author</option>
        <option value="topic">Topic</option>
      </select>  
      </div> 


      <div className="select-dropdown">
      <select name="topic" onChange={(e) => changeTopic(e.target.value)}>
      <option selected disabled>Topic:</option>
        <option value="football">Football</option>
        <option value="coding">Coding</option>
        <option value="cooking">Cooking</option>
      </select>
      </div>
    
    

      <button className="button-19" value="asc" onClick={(e) => setOrderBy(e.target.value)}>
        Ascending
      </button>
      <button className="button-19" value="" onClick={(e) => setOrderBy(e.target.value)}>Descending</button>
      


      
      
      </div>
  )
}
