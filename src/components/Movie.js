import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Movie = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=b299544458b3d5d0e56aca6192d9b7d5"
    )
      .then((res) => res.json())
      .then((json) => {
        setMovieList(json.results);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setLoading(false); // Set loading to false in case of error
      });
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="movie-container">
      {/* Conditional rendering to display loading message */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        // Map function to map over movieList to display images if movieList is not empty with conditional rendering
        movieList.length !== 0 &&
        movieList.map((movie) => (
          <Link key={movie.id} to={`/moviedetails/${movie.id}`}>
            <img
              className="movie-image"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </Link>
        ))
      )}
    </div>
  );
};

export default Movie;
