import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Here you can perform actions with the search query, such as redirecting to a search results page
    console.log("Search submitted:", searchQuery);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            React Movie DB
          </Link>
        </Typography>
        <ul className="nav-links" style={{ listStyle: "none", display: "flex" }}>
          <li style={{ marginRight: "25px" }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>
          </li>
          <li style={{ marginRight: "25px",'&:hover': { textDecoration: 'underline' }}}>
            <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
              About Us
            </Link>
          </li>
          <li>
            <form onSubmit={handleSearchSubmit}>
              <TextField
                id="search"
                label="Search Movies"
                variant="outlined"
                color="secondary"
                value={searchQuery}
                onChange={handleSearchChange}
                InputProps={{
                  endAdornment: (
                    <IconButton type="submit" aria-label="search">
                      <SearchIcon />
                    </IconButton>
                  ),
                }}
              />
            </form>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};
