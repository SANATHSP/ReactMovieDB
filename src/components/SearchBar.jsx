import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Navigate, useHistory, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    Navigate.push(`/search?q=${searchQuery}`);
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
    </form>
  );
};

export default SearchBar;
