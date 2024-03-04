import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";

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
          <li style={{ marginRight: "25px",'&:hover': { textDecoration: 'underline' }}}>
            <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
              About Us
            </Link>
          </li>
          <li>
              <Link to="/search/movie" className="btn btn-main">
                Search Movies
              </Link>
            </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};
