import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./pages/Articles/Articles"));
const ArticleDetails = lazy(
  () => import("./pages/ArticleDetails/ArticleDetails")
);

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/article/:id" element={<ArticleDetails />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
