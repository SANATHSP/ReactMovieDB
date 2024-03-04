import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const api_key=process.env.REACT_APP_TMDB_KEY

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
   
    fetchMovieDetails();
  }, [id,api_key]); 

  if (!movieDetails) {
    return <div>Loading...</div>;
  }
  //destructuring from the state var 
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