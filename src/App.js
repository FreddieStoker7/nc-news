import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AllArticles from "./components/AllArticles";
import AllTopics from "./components/AllTopics";
import "./App.css";
import AllArticlesByTopic from "./components/AllArticlesByTopic";
import IndividualArticleInFull from "./components/IndividualArticleInFull";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="navbar">
            <Link to="/"  className="homebtn">Home</Link>
            <div className="dropdown">
          <button className="dropbtn">
            <Link to="/topics">Topics</Link>
            <i class="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
            <Link to="/topics/football">Football</Link>
            <Link to="/topics/coding">Coding</Link>
            <Link to="/topics/cooking">Cooking</Link>
          </div>
         
        </div>
      </div>
      <Routes>
        <Route path="/" element={<AllArticles />} />
        <Route path="/topics" element={<AllTopics />} />
        <Route path="/topics/:topic" element={<AllArticlesByTopic />} />
        <Route path="/articles/:article_id" element={<IndividualArticleInFull />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
