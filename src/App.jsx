import Header from "./components/Header";
import "./App.css";
import Articles from "./components/Articles";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ArticleCard from "./components/ArticleCard";
import Comments from "./components/Comments";
import Users from "./components/Users";
import ChangeUser from "./components/ChangeUser";
import HomePage from "./components/HomePage";
import { useState } from "react";
import UserContext from "./contexts/UserContext";
import CommentAdder from "./components/CommentAdder";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<ArticleCard />} />
        <Route path="/change-user" element={<ChangeUser />} />
      </Routes>
    </div>
  );
}

export default App;

{
  /* <Route path="/articles/:article_id/comments" element={<Comments />} />
<Route path="/commentAdder" element={<CommentAdder />} /> */
}
