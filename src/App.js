import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";
import Movie from "./components/Movie";
import AboutPage from "./pages/AboutPage";
import MovieDetails from "./pages/Moviedetails";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <div className="content">
          <Routes>
            {/* Define routes for different pages */}
            <Route path="/" element={<Movie />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route path="/moviedetails/:id" element={<MovieDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

//testing
