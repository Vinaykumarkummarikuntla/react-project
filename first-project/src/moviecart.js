
import React from 'react'

import './Moviecart.css';
export default function Moviecart({movie}) {
    console.log(movie)
    const { title, posterUrl, description, rating } = movie;
    return (
      <div className="movie-cart">
        <img src={posterUrl} className="movie-image" />
        <div className="movie-info">
          <h2 className="movie-title">{title}</h2>
          <p className="movie-description">{description}</p>
          <p className="movie-url">{rating}</p>
        </div>
      </div>
    );
  }

