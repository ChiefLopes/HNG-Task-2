import { useEffect} from 'react'

const MovieSection = () => {
        const getMovies = () => {
          fetch(
            "https://api.themoviedb.org/3/discover/movie?api_key=52fc64fc69ad74d43acbf242d5f72966"
          )
            .then((response) => response.json())
            .then((response) => console.log(response));
        };
    
    useEffect(() => {
        getMovies()
    },[])
        
      return <div></div>;
    }
    



export default MovieSection
