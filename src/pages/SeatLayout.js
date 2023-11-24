import React, { useState } from 'react';
import SeatMap from '../component/SeatMap';
import seatData from '../component/SeatData';

const SeatLayout = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (selectedSeat) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(selectedSeat)
        ? prevSelectedSeats.filter((seat) => seat !== selectedSeat)
        : [...prevSelectedSeats, selectedSeat]
    );
  };

  const handleProceedClick = () => {
    // Assuming you want to log the selected seats for now
    console.log('Selected Seats:', selectedSeats);

    // TODO: Add logic to proceed with the selected seats (e.g., send to backend)
  };

  return (
    <div>
      <h1>Seat Map</h1>
      <SeatMap seatData={seatData} onSeatClick={handleSeatClick} />
      <button onClick={handleProceedClick}>Proceed</button>
    </div>
  );
};

export default SeatLayout;

