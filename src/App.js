import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Movie from "./Components/MovieCard/Movie"

const DOMAIN = 'https://www.omdbapi.com?apikey=78a9e749';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMovies = async (title) => {
    setLoading(true);
    setError(null); // Clear any previous errors
    try {
      const response = await fetch(`${DOMAIN}&s=${title}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data.Search)
      setSearchResults(data.Search || []);
    } catch (error) {
      setError(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Check if searchTerm is not empty before making the initial search
    if (searchTerm) {
      searchMovies(searchTerm);
    }
  }, [searchTerm]);

  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <Header textHeader="Watch Movies Online Free" textP="LFRAJA is one of the best free sites to watch movies online for free" />
      <div>
        <h2>Search Results</h2>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && searchResults.length === 0 && <p>No results found.</p>}
        {!loading && !error && searchResults.length > 0 && (
        <Container>
        <Row>
          {searchResults.map((movie) => (
            <Movie
              key={movie.imdbID}
              title={movie.Title}
              year={movie.Year}
              poster={movie.Poster}
              type={movie.Type}
            />
          ))}
        </Row>
      </Container>
        )}
      </div>
    </div>
  );
}

export default App;
