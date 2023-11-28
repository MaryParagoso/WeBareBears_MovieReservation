// ReservationConfirmation.js
import React, { useState } from 'react';
import { ReservationDetails } from '../component/ReservationDetails';
import ReservationPriceCalculator from '../component/ReservationPriceCalculator';

const ReservationConfirmation = () => {
  // Destructure values from ReservationDetails
  const { date, cinemaNumber, movieName, isPremium, timeSlots, seatNumbers } = ReservationDetails;

  // State to track senior citizen status
  const [seniorCitizenStatus, setSeniorCitizenStatus] = useState(Array(seatNumbers.length).fill(false));

  // Handle button click for a seat
  const handleSeatButtonClick = (seatIndex) => {
    // Toggle senior citizen status for the clicked seat
    const updatedStatus = seniorCitizenStatus.map((status, index) =>
      index === seatIndex ? !status : status
    );
    setSeniorCitizenStatus(updatedStatus);
  };

  return (
    <div>
      <h1>Reservation Confirmation</h1>
      <p>Date: {date}</p>
      <p>Cinema Number: {cinemaNumber}</p>
      <p>Movie Name: {movieName}</p>
      {/* Conditionally display "Premium" paragraph if isPremium is true */}
      {isPremium ? <p>Premium: {isPremium.toString()}</p> : null}
      <p>Time Slots: {timeSlots}</p>
      <p>Selected Seats:</p>

      {/* Display each seat number with a button */}
      {seatNumbers.map((seat, index) => (
        <div key={index}>
          <button
            onClick={() => handleSeatButtonClick(index)}
            style={{ backgroundColor: seniorCitizenStatus[index] ? 'gold' : 'transparent' }}
          >
            {seat.seatNumber} {seniorCitizenStatus[index] ? '(Senior Citizen)' : ''}
          </button>
        </div>
      ))}

      {/* Reservation price calculator component */}
      <ReservationPriceCalculator seatNumbers={seatNumbers} seniorCitizenStatus={seniorCitizenStatus} isPremium={isPremium} />

      {/* Add any additional information or UI elements as needed */}
      {/* For example, a button to proceed to the next step or submit the reservation */}
    </div>
  );
};

export default ReservationConfirmation;


