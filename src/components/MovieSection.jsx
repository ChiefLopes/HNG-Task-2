import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";


const MovieSection = () => {
const [topRatedMovies, setTopRatedMovies] = useState([]);

useEffect(() => {
  axios
    .get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=52fc64fc69ad74d43acbf242d5f72966"
    )
    .then((response) => setTopRatedMovies(response.data.results))
    .catch((error) => console.error(error));
}, []);

const top10Movies = topRatedMovies.slice(0, 10);

return (
  <div className="movie-grid">
    {top10Movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
);
};

export default MovieSection;
