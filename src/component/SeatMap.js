// components/SeatMap.js
import React, { useState } from 'react';
import { Button, Space } from 'antd';
import '../stylesheets/seatmap.css';

const generateSeatData = () => {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const columns = ['1', '2', '3', '4', '5'];

  const seatData = [];

  rows.forEach((row) => {
    const rowSeats = columns.map((column) => ({ seat_name: row + column, availability: 'available' }));
    seatData.push(rowSeats);
  });

  return seatData;
};

const SeatMap = ({ onSeatClick }) => {
  const [seats, setSeats] = useState(generateSeatData());

  const handleSeatClick = (rowIndex, columnIndex) => {
    const updatedSeats = [...seats];
    updatedSeats[rowIndex][columnIndex].availability =
      updatedSeats[rowIndex][columnIndex].availability === 'available' ? 'booked' : 'available';
    setSeats(updatedSeats);

    // Pass the seat information to the parent component
    const seatInfo = updatedSeats[rowIndex][columnIndex];
    onSeatClick(seatInfo);
  };

  return (
    <div>
      {seats.map((row, rowIndex) => (
        <div key={rowIndex} className="seat-row">
          {row.map((seat, columnIndex) => (
            <Button
              key={seat.seat_name}
              type={seat.availability === 'booked' ? 'danger' : 'primary'}
              disabled={seat.availability === 'booked'}
              className="seat"
              onClick={() => handleSeatClick(rowIndex, columnIndex)}
            >
              {seat.seat_name}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SeatMap;

