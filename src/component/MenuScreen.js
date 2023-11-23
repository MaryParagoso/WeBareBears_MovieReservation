import React from 'react';
import { Button } from 'antd';


const MenuScreen = ({ onButtonClick }) => {
  const handleButtonClick = (choice) => {
    onButtonClick(choice);
  };

  return (
    <div>
      <p>Would you like to make a Reservation or Cancel?</p>
      <Button type="primary" onClick={() => handleButtonClick('Reserve')}>
        Reserve
      </Button>
      <Button type="danger" onClick={() => handleButtonClick('Cancel')}>
        Cancel
      </Button>
    </div>
  );
};

export default MenuScreen;