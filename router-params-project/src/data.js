const { getDefaultNormalizer } = require("@testing-library/react");

const Movies = [
    { id: 1,
      title: "Inception",
      director: "Christopher Nolan",
      releaseYear: 2010,
      genres: ["Action", "Sci-Fi", "Thriller"],
      rating: 8.8
    },
    {
      id: 2,
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      releaseYear: 1994,
      genres: ["Drama"],
      rating: 9.3
    },
    {
      id:3,
      title: "The Dark Knight",
      director: "Christopher Nolan",
      releaseYear: 2008,
      genres: ["Action", "Crime", "Drama"],
      rating: 9.0
    },
    {
      id:4, 
      title: "Forrest Gump",
      director: "Robert Zemeckis",
      releaseYear: 1994,
      genres: ["Drama", "Romance"],
      rating: 8.8
    },
    { 
      id:5,
      title: "The Matrix",
      director: "Lana Wachowski, Lilly Wachowski",
      releaseYear: 1999,
      genres: ["Action", "Sci-Fi"],
      rating: 8.7
    }
  ];

  
export default Movies;