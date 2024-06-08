import React from 'react'
import { useParams } from 'react-router-dom'
import Movies from './data'



export default function ProductInfo() {
  const urlData = useParams()
  return (
   
    <div>
      {<h1>{urlData.movieid}</h1>}
      <div>
      {Movies.filter(movie => movie.id === parseInt(urlData.movieid)).map(movie => (
        <div key={movie.id} style={{border: '1px solid #ccc', padding: '10px', margin: '10px 0'}}>
          <h2>{movie.title}</h2>
          <p><strong>Director:</strong> {movie.director}</p>
          <p><strong>Release Year:</strong> {movie.releaseYear}</p>
          <p><strong>Genres:</strong> {movie.genres.join(', ')}</p>
          <p><strong>Rating:</strong> {movie.rating}</p>
        </div>
      ))}
    </div>
    </div>
  )
}
