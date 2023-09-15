import "./App.css";
import Hero from "./components/Hero.jsx";
import MovieDetailPage from "./components/MovieDetailPage";
import MovieSection from "./components/MovieSection";

function App() {
  return (
    <div className="App">
      <Hero />
      <MovieSection />
      <MovieDetailPage />
    </div>
  );
}

export default App;
