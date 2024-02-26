import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArticleDetails from "./pages/ArticleDetails/ArticleDetails";
import Articles from "./pages/Articles/Articles";
import { fetchArticles } from "./Redux/slices/ariclesSlice";
import { useAppDispatch } from "./hooks/hooks";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#efefef",
        height: "100vh",
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Articles />} />
        </Routes>
        <Routes>
          <Route path="/article/:id" element={<ArticleDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
