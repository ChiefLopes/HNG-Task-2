// import React from "react";
import PropTypes from "prop-types";

const MovieCard = ({ movie }) => {
   const genresData = {
     genres: [
       {
         id: 28,
         name: "Action",
       },
       {
         id: 12,
         name: "Adventure",
       },
       {
         id: 16,
         name: "Animation",
       },
       {
         id: 35,
         name: "Comedy",
       },
       {
         id: 80,
         name: "Crime",
       },
       {
         id: 99,
         name: "Documentary",
       },
       {
         id: 18,
         name: "Drama",
       },
       {
         id: 10751,
         name: "Family",
       },
       {
         id: 14,
         name: "Fantasy",
       },
       {
         id: 36,
         name: "History",
       },
       {
         id: 27,
         name: "Horror",
       },
       {
         id: 10402,
         name: "Music",
       },
       {
         id: 9648,
         name: "Mystery",
       },
       {
         id: 10749,
         name: "Romance",
       },
       {
         id: 878,
         name: "Science Fiction",
       },
       {
         id: 10770,
         name: "TV Movie",
       },
       {
         id: 53,
         name: "Thriller",
       },
       {
         id: 10752,
         name: "War",
       },
       {
         id: 37,
         name: "Western",
       },
     ],
   };
    
    function getGenreNamesByIds(genreIds) {
  const genres = genresData.genres;
  return genreIds.map((genreId) => {
    const genre = genres.find((g) => g.id === genreId);
    return genre ? genre.name : "Unknown"; // Return the genre name or "Unknown" if not found
  });
}
    

  return (
    <div data-testid="movie-card" className="bg-white rounded-lg shadow-md p-4">
      <img
        data-testid="movie-poster"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full rounded-lg mb-2"
      />

      <p className="text-zinc-950 font-semibold mb-3 text-xl">{movie.title}</p>
      <p data-testid="movie-release-date" className="text-gray-600 mb-2">
        {`${movie.vote_average * 10}.0`}/100
      </p>
      <h2
        data-testid="genre_ids"
        className=" font-medium text-gray-600  mb-1 ">
        {getGenreNamesByIds(movie.genre_ids).join(", ")}
      </h2>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    genre_ids: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
