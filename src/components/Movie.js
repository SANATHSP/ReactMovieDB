import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TMDBContext } from "../contextapi/TMDBContext"; // Import the TMDBContext

const Movie = () => {
  const tmdbData = useContext(TMDBContext); // Access TMDBContext
  console.log(tmdbData);
  // Check if tmdbData is null or undefined before using it
  if (!tmdbData) {
    return <p>Loading...</p>;
  }

  const { results: movieList } = tmdbData;

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
