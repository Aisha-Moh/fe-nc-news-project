import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Articles from "./components/Articles";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ArticleCard from "./components/ArticleCard";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:article_id" element={<ArticleCard />} />
      </Routes>
    </>
  );
}

export default App;
