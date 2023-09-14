import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const MovieSection = () => {
  const [listMovies, setListMovies] = useState([]);
  const getMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=52fc64fc69ad74d43acbf242d5f72966"
    )
      .then((response) => response.json())
      .then((json) => setListMovies(json.results));
  };

  useEffect(() => {
    getMovies();
  }, []);

  const top10Movies = listMovies.slice(0, 10);

  return (
    <>
      <div className="grid grid-cols-4 gap space-x">
        {top10Movies.map((movie) => (
          <div  key={movie.id}>
            <img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="movie posters"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieSection;
