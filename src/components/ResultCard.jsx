import React from 'react'
import { Link } from 'react-router-dom'

const ResultCard = ({movie}) => {
  return (
    <div className="result-card">
        <div className="poster-wrapper">
          {/* conditional statement to render the result movie image, if not, load the filler image for posters with invalid image poster */}
            {movie.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                />
            ): (
                <div className="filler-poster">
                                    
                </div>
            )}
        </div>
        <div className="info">
          <div className="header">
            <h3 className="title">{movie.title}</h3>
            <h4 className="release-date">
              {/* conditional rendering of the movie poster date, if none are specified */}
              {/* trim the date format to  just the release year */}
                {movie.release_date ? movie.release_date.substring(0,4): "-"}
            </h4>
          </div>
          <div className="controls">
             {/* Using link to navigate to the movie details page */}
          
          <button className="btn">
          <Link to={`/moviedetails/${movie.id}`} className="btn">
          View Details
          </Link>
          </button>
        </div>
        </div>
        
    </div>
  )
}

export default ResultCard