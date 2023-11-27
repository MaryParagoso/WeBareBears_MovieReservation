import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: black;
  color: white;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
  align-items: center;
`;

export const Appname = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MovieImage = styled.img`
  width: 48px;
  height: 48px;
  margin: 15px;
`;

export const Searchbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; /* Updated to center the SearchInput vertically */
  padding: 10px 10px;
  background-color: white;
  border-radius: 10px;
  margin-left: 20px;
  width: 30%;
  background-color: white;
`;

export const SearchIcon = styled.img`
  width: 30px;
  height: 30px;
  padding: 3px;
`;

export const MovielistContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;
`;
