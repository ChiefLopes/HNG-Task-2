import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { id } = useParams(); // Get the :id parameter from the URL
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    // Fetch movie details using the id parameter
    fetch(`https://api.themoviedb.org/3/movie/${id}`)
      .then((response) => response.json())
      .then((data) => setMovieDetails(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]); // Trigger the fetch when the id parameter changes

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  console.log(movieDetails);

  return (
    <div>
      <h2 data-testid="movie-title">{movieDetails.title}</h2>
      <p data-testid="movie-release-date">{movieDetails.release_date}</p>
      <p data-testid="movie-runtime">{movieDetails.runtime} minutes</p>
      <p data-testid="movie-overview">{movieDetails.overview}</p>
    </div>
  );
};

export default MovieDetailsPage;
