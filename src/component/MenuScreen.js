import React from "react";
import { Button } from "antd";
import { ButtonContainer, Container } from "../stylesheets/MenuUI";

const MenuScreen = ({ onButtonClick }) => {
  const handleButtonClick = (choice) => {
    onButtonClick(choice);
  };

  return (
    <Container>
      <h1 style={{ color: "white" }}>
        Would you like to make a Reservation or Cancel?
      </h1>
      <ButtonContainer>
        <Button type="primary" onClick={() => handleButtonClick("Reserve")}>
          Reserve
        </Button>
        <Button type="danger" onClick={() => handleButtonClick("Cancel")}>
          Cancel
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default MenuScreen;
