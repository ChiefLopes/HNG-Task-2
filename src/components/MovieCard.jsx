import PropTypes from "prop-types";
import imdb from "../assets/images/imdb.svg";
import tomato from "../assets/images/tomato.svg"
import favIcon from "../assets/images/Favorite.svg"

const MovieCard = ({ movie }) => {
    
    function generateRandomPercentageAbove40() {
      const randomDecimal = Math.random() * 60; // Range from 0 to 59
      const randomPercentage = randomDecimal + 40; // Shift range to start from 40%
      return randomPercentage.toFixed(2); // Limit to two decimal places
    }
    
    const randomPercentage = generateRandomPercentageAbove40();
    
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
        className="w-full rounded-lg mb-2 "
      />

      <p className="text-gray-600 mb-4">USA, 2016</p>

      <p className="text-zinc-950 font-semibold mb-2 text-xl">{movie.title}</p>
      <div className=" flex justify-between">
        <p data-testid="movie-release-date" className="text-gray-600 mb-3">
          <img
            src={imdb}
            alt="Image Description"
            className="inline-block mr-2"
          />
          {`${movie.vote_average * 10}.0`}/100
        </p>
        <p className="text-gray-600 flex">
          <img src={tomato} alt="" className=" mb-2 mr-2.5 " />
          {`${randomPercentage}%`}
        </p>
      </div>
      <h2 data-testid="genre_ids" className=" font-medium text-gray-600  mb-2 ">
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
