import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Movie = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = process.env.REACT_APP_TMDB_KEY;
  const movieBaseUrl =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fullUrl = `${movieBaseUrl}&api_key=${apiKey}`;
        const response = await fetch(fullUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovieList(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [apiKey, movieBaseUrl]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="movie-container">
      {movieList.map((movie) => (
        <Link key={movie.id} to={`/moviedetails/${movie.id}`}>
          <img
            className="movie-image"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </Link>
      ))}
    </div>
  );
};

export default Movie;
