import { useEffect, useState } from "react";

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
    
    console.log(listMovies);

    return (
      <>
        <div className="">
          {listMovies.map((movie) => (
            <img
              key={movie.id} 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="movie posters"
            />
          ))}
        </div>
      </>
    );
};

export default MovieSection;
