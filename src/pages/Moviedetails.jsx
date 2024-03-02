import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

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
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const { title, release_date, overview, poster_path } = movieDetails;

  // image URL using a template literal
  const imageURL = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <div className="movie-details">
      <div className="box">
        <div className="poster">
          {/* Using the imageURL var for the src  */}
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
