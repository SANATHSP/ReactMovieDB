import React, { createContext, useState, useEffect } from 'react';

// Creating the Context object
export const TMDBContext = createContext();

// Creating the Provider component
export const TMDBProvider = (props) => {
  const [tmdbData, setTMDBData] = useState(null);
  const [error, setError] = useState(null); // State for handling errors
  const api_key = process.env.REACT_APP_TMDB_KEY;
  const movieBaseUrl = 'https://api.themoviedb.org/3/movie';
  // Fetch TMDB api data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(movieBaseUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setTMDBData(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching TMDB data:', error);
        setError(error.message); // Set error state with error message
      }
    };

    fetchData();
  }, []);

   // Defining the value object to include tmdbData, error, and movie_url
   const value = { tmdbData, error, movieBaseUrl };

  return (
    // Providing the TMDB data to children components
    <TMDBContext.Provider value={{value }}>
    {props.children}
  </TMDBContext.Provider>
  );
};
