import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TMDBContext } from "../contextapi/TMDBContext"; // Import the TMDBContext

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const tmdbData = useContext(TMDBContext); // Use the useContext hook to access the context

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b299544458b3d5d0e56aca6192d9b7d5`);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id, tmdbData.api_key]); // Add tmdbData.api_key to dependency array

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const { title, release_date, overview, poster_path } = movieDetails;
  const imageURL = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <div className="movie-details">
      <div className="box">
        <div className="poster">
          <img src={imageURL} alt={title} />
        </div>
        <div className="details">
          <h2>{title}</h2>
          <p>Release Date: {release_date}</p>
          <p>{overview}</p>
          <Link to="/" className="btn btn-primary">Go Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
