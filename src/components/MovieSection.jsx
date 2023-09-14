import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

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

  console.log(top10Movies);

  return (
    <>
      {" "}
      <div>
        <div className=" mt-10 mb-5 mx-12 flex justify-between">
          <span className="text-zinc-950 text-4xl font-medium ml-4 ">Featured Movies</span>
          <span className=" text-red-800 ">See more &gt; </span>
        </div>
        <div className="grid grid-cols-4 gap-7 space-x ">
          {top10Movies.map((movie) => (
            // Render the MovieCard component for each movie in the listMovies array
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieSection;
