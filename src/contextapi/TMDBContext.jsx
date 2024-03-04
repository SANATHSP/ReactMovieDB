import React, { createContext, useState, useEffect } from 'react';

// Creating the Context object
export const TMDBContext = createContext();

// Creating the Provider component
export const TMDBProvider = ({ children }) => {
  const [tmdbData, setTMDBData] = useState(null);

  // Fetch TMDB api data on component 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=b299544458b3d5d0e56aca6192d9b7d5");
        const data = await response.json();
        setTMDBData(data);
      } catch (error) {
        console.error('Error fetching TMDB data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    // Providing the TMDB data to children components
    <TMDBContext.Provider value={tmdbData}>{children}</TMDBContext.Provider>
  );
};
