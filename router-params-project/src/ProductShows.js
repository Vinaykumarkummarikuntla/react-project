import React from 'react';
import Movies from './data';
import { Link } from 'react-router-dom';


export default function ProductShows() {
    
  return (
    <div>
      {Movies.map(movie => (
        <div key={movie.title} style={{border: '1px solid #ccc', padding: '10px', margin: '10px 0'}}>
          <h2>{movie.title}</h2>
          <p><strong>Director:</strong> {movie.director}</p>
          <p><strong>Release Year:</strong> {movie.releaseYear}</p>
          <p><strong>Genres:</strong> {movie.genres.join(', ')}</p>
          <p><strong>Rating:</strong> {movie.rating}</p>
          <div>
            <Link to={`pinfo/${movie.id}`} className="btn btn-primary form-control" >Show More</Link>
        </div>
        </div>
        
      ))}
    </div>
  );
}
