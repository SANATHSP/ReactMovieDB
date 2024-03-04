# REACT MOVIE APP

This is a demo React project created to showcase a movie database application using React.js. It demonstrates various features such as browsing a list of movies, viewing movie details, and searching for movies by title. The project utilizes the React Router for navigation and the Context API for state management.

## Features

- Users can explore a curated list of popular movies, sorted by factors like popularity
- Clicking on a movie reveals detailed information such as title, release date, overview, and a high-resolution poster.
- Users can quickly access important details about each movie.
- A search feature allows users to find specific movies by entering keywords or titles.
- Search results are dynamically updated as users type, providing a seamless and efficient search experience.
- Clicking on "Learn more" for a specific movie navigates the user to a dedicated page displaying in-depth information.

## Tech

React Movie app uses several open-source projects to work properly:

- React Router - Enhance navigation within the React app using React Router for dynamic routing.
- Material-UI - Utilize a UI component library like Material-UI to ensure a consistent and visually appealing design.
- Axios - Simplify HTTP requests and API integration using Axios for a smoother data-fetching experience.
- React Context API - Manage state more efficiently by incorporating a state management solution like the React Context API
- ESLint and Prettier - Enforce coding standards and maintain code consistency using ESLint and Prettier.

## Installation

REACT MOVIE APP requires [Node.js](https://nodejs.org/) v21.6.2 or higher to run.

Install the dependencies and devDependencies and start the server.

```sh
cd frontend
npm install
npm start
```

> Note: `API endpoint` for the following react-app.

```sh
http://localhost:3000/                    -home page
http://localhost:3000/about               -about page
http://localhost:3000/moviedetails/:id    -movie details page
http://localhost:3000/search/movie        -searchbar
http://localhost:3000/!                   -404 error page
```
