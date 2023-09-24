import { useEffect, useState } from "react";
import "./App.css";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";

// ab44f5ac
const url = 'https://www.omdbapi.com?apikey=ab44f5ac';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const searchmovie = async (title) => {
    const response = await fetch(`${url}&s=${title}`);
    const data = await response.json();
    
    setMovies(data.Search);
  };

  useEffect(() => {
    searchmovie("Superman");
  }, []);

  return (
    <div className="app">
      <h1>MovieExplorer</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={searchIcon}
          alt="searchiconsss"
          onClick={() => searchmovie(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}

    </div>
  );
};

export default App;
