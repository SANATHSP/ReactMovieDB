import React, { useState, useContext } from "react";
import { TextField } from "@mui/material";
import { TMDBContext } from "./TMDBContext";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const tmdbData = useContext(TMDBContext);
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    console.log("Search query:", query);

    if (query.trim() !== "") {
      const filteredMovies = tmdbData.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      console.log("Filtered movies:", filteredMovies);
      setSearchResults(filteredMovies);
    } else {
      console.log("Empty search query");
      setSearchResults([]);
    }
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${searchQuery}`);
      console.log("Search submitted:", searchQuery);
    }
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <TextField
        id="search"
        label="Search Movies"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {searchResults.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </form>
  );
};

export default SearchBar;
