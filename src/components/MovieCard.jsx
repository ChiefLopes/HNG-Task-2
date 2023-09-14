// import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div data-testid="movie-card" className="bg-white rounded-lg shadow-md p-4">
      <img
        data-testid="movie-poster"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full rounded-lg mb-2"
      />
      <h2 data-testid="movie-title" className="text-xl font-semibold mb-1">
        {movie.title}
      </h2>
      <p data-testid="movie-release-date" className="text-gray-600 mb-2">
        Release Date: {movie.release_date}
      </p>
      <p className="text-gray-700">{movie.overview}</p>
    </div>
  );
};

export default MovieCard;
