import React, { createContext, useState, useEffect, useMemo } from 'react';

// Creating the Context object
export const TMDBContext = createContext();

// Creating the Provider component
export const TMDBProvider = (props) => {

  
  const [tmdbData, setTMDBData] = useState(null);
  const [error, setError] = useState(null); // State for handling errors

  const api_key = process.env.REACT_APP_TMDB_KEY;
  const movieBaseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;

  // Fetch TMDB api data 
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
        setError(error.message); // Setting error state with error message
      }
    };

    fetchData();
  }, []);

  // Memoize the context value to optimize performance
  const tmdbMemo = useMemo(() => ({ tmdbData, error, movieBaseUrl }), [
    tmdbData,
    error,
    movieBaseUrl,
  ]);

  console.log(tmdbMemo)

  return (
    // Providing the TMDB data to children components
    <TMDBContext.Provider value={{tmdbMemo}}>
    {props.children}
  </TMDBContext.Provider>
  );
};
