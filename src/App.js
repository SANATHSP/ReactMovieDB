import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";
import Movie from "./components/Movie";
import AboutPage from "./pages/AboutPage";
import MovieDetails from "./pages/Moviedetails";
import { TMDBProvider } from "../src/contextapi/TMDBContext";
import { SearchMovies } from "./components/SearchMovies";
import NotFoundPage from "./pages/NotFoundPage";
function App() {
  return (
    // wrapping the provider to the child component
    <TMDBProvider>
      <Router>
        <Navbar />
        <div className="container">
          <div className="content">
            <Routes>
              {/* Define routes for different pages */}
              <Route path="/" element={<Movie />} />
              <Route exact path="/about" element={<AboutPage />} />
              <Route path="/moviedetails/:id" element={<MovieDetails />} />
              <Route path="/search/movie" element={<SearchMovies />} />
              {/* route to handle 404 page */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </TMDBProvider>
  );
}

export default App;
