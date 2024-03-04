import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";

const Movie = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = process.env.REACT_APP_TMDB_KEY;
  const movieBaseUrl =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc";

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

  console.log(movieList);

  return (
    <div className="movie-container">
      {movieList.map((movie) => (
        <ImageCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movie;
