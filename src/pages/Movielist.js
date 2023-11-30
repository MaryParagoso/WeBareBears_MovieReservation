// src/pages/Movielist.js
import React, { useState, useEffect } from 'react';
import {
  Container,
  Header,
  Appname,
  MovieImage,
  Searchbar,
  SearchIcon,
  MovielistContainer,
  ButtonContainer,
  Button,
} from "../stylesheets/Cssmovielist";
import axios from 'axios';
import SearchInput from "../component/SearchInput";
import MovieComponent from "../component/MovieComp";
import movieApi from "../apicalls/movieApi";

function Movielist() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, updateSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

// src/pages/Movielist.js
useEffect(() => {
  const fetchMovies = async () => {
    try {
      const moviesData = await movieApi.getMovies();
      console.log('Movies Data:', moviesData); // Add this line
      setMovies(moviesData);
    } catch (error) {
      console.error('Error fetching movies:', error);
      // Handle error
    }
  };

  fetchMovies();
}, []);


  const onTextChange = (event) => {
    updateSearchQuery(event.target.value);
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedMovies = movies.slice(startIndex, endIndex);

  return (
    <Container>
      <Header>
        <Appname>
          <MovieImage src="/clapperboard.png" alt="Clapperboard" />
          Movie Lists
        </Appname>
        <ButtonContainer>
          <Button>Cinema 1</Button>
          <Button>Cinema 2</Button>
          <Button>Cinema 3</Button>
        </ButtonContainer>
        <Searchbar>
          <SearchIcon src="/magnifying-glass.png" alt="MagnifyingGlass" />
          <SearchInput onChange={onTextChange} />
        </Searchbar>
      </Header>
      <MovielistContainer>
        {displayedMovies.map((movie, index) => (
          <MovieComponent key={index} movie={movie} />
        ))}
      </MovielistContainer>
    </Container>
  );
}

export default Movielist;
