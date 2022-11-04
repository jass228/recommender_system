import React from "react";
import "./assets/style/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Movie, Music } from "./pages";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<Home />} />
          <Route exact path="/music-recommender" element={<Music />} />
          <Route exact path="/movie-recommender" element={<Movie />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
