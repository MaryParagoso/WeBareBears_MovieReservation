// Movielist.js
import React, { useState } from "react";
import {
  Container,
  Header,
  Appname,
  MovieImage,
  Searchbar,
  SearchIcon,
  MovielistContainer,
} from "../stylesheets/Cssmovielist";
import SearchInput from "../component/SearchInput";
import MovieComponent from "../component/MovieComp";
import { moviesData } from "../component/MoviesData";

function Movielist() {
  const [searchQuery, updateSearchQuery] = useState("");

  const onTextChange = (event) => {
    updateSearchQuery(event.target.value);
  };

  return (
    <Container>
      <Header>
        <Appname>
          <MovieImage src="/clapperboard.png" alt="Clapperboard" />
          Movie Lists
        </Appname>
        <Searchbar>
          <SearchIcon src="/magnifying-glass.png" alt="MagnifyingGlass" />
          <SearchInput onChange={onTextChange} />
        </Searchbar>
      </Header>
      <MovielistContainer>
        {moviesData.map((movie, index) => (
          <MovieComponent key={index} movie={movie} />
        ))}
      </MovielistContainer>
    </Container>
  );
}

export default Movielist;
