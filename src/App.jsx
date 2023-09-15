import "./App.css";
import Hero from "./components/Hero.jsx";
import MovieDetailsPage from "./components/MovieDetailsPage";
import MovieSection from "./components/MovieSection";

function App() {
  return (
    <div className="App">
      <Hero />
      <MovieSection />
      <MovieDetailsPage />
    </div>
  );
}

export default App;
