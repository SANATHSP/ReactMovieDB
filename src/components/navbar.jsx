import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
export const Navbar = () => {
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
          <li style={{ marginRight: "25px" }}>
            <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
              About Us
            </Link>
          </li>
          <li>
            <TextField
              id="search"
              label="Search Movies"
              variant="outlined"
              color="secondary"

              InputProps={{
                endAdornment: (
                  <IconButton type="submit" aria-label="search">
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};
