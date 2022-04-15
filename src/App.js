import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AllArticles from "./components/AllArticles";
import AllTopics from "./components/AllTopics";
import "./index.css";
import AllArticlesByTopic from "./components/AllArticlesByTopic";
import IndividualArticleInFull from "./components/IndividualArticleInFull";
import { useState, useEffect } from "react";
import { fetchAllUsers } from "./apiRequests/api";
import * as React from 'react';
import { UserContext } from './contexts/Users.js'
import GenericErrorPage from "./components/GenericErrorPage";
import NavBar from "./components/NavBar";

function App() {
  const [singleUser, setSingleUser] = useState('tickle122')
  const [allUsers, setAllUsers] = useState([])
  
  useEffect(() => {
    fetchAllUsers().then((users) => {
        setAllUsers(users)
    })
},[])

  
  return (
    <BrowserRouter>
    <UserContext.Provider value={{ singleUser, setSingleUser }}>
      <Header />
      <p>logged in as: {singleUser}</p>
      <NavBar allUsers={allUsers} setSingleUser={setSingleUser}/>
      <Routes>
        <Route path="/" element={<AllArticles />} />
        <Route path="/topics" element={<AllTopics />} />
        <Route path="/topics/:topic" element={<AllArticlesByTopic />} />
        <Route path="/articles/:article_id" element={<IndividualArticleInFull />} />
        <Route path="/*" element={<GenericErrorPage />} />
      </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
