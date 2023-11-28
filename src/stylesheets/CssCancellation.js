//CssCancellationPath.js
import styled from "styled-components";

export const Container = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
`;

export const CancelContainer = styled.div`
  padding-top: 20px;
  border: 2px solid black;
  border-radius: 20px;
  height: 600px;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

export const CancelWallpaper = styled.div`
  background-color: black;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SelectContainer = styled.div`
  width: 100%;
  margin: 0 20px; // Adjust margin as needed
`;
