import React, { useState } from "react";
import Seat from "./Seat";


const SeatMap = ({ seatMap, selectedSeats, onSelectedSeatsChange }) => {
  //const [selectedSeats, setSelectedSeats] = useState([]);
  const [isConfirmed, setIsConfirmed] = useState([]);

  // const handleSeatClick = (seatNumber) => {
  //   if(!isConfirmed.includes(seatNumber)){

  //   setSelectedSeats((prevSelectedSeats) => {
  //     if (prevSelectedSeats.includes(seatNumber)) {
  //       return prevSelectedSeats.filter((seat) => seat !== seatNumber);
  //     } else {
  //       return [...prevSelectedSeats, seatNumber];
  //     }
  //   });

  // }

  const handleSeatClick = (seatNumber) => {
    const seat = seatMap.flat().find((seat) => seat.seat === seatNumber);
    if (seat && seat.available) {
      if (selectedSeats.includes(seatNumber)) {
        onSelectedSeatsChange(
          selectedSeats.filter((seat) => seat !== seatNumber)
        );
      } else {
        onSelectedSeatsChange([...selectedSeats, seatNumber]);
      }
    }
  };

  return (
    <div className="container">
      <div className="container1">
        <p>Please select your seats:</p>
        <div className="seat-map">
          {seatMap.map((row, rowIndex) => (
            <div
              className="row seat-row"
              style={{ justifyContent: "left", display: "flex" }}
              key={rowIndex}
            >
              {row.map((seat, seatIndex) => (
                <div className="col-1 seat-column" key={seatIndex}>
                  {seat.seat ? (
                    /*values passing*/
                    <Seat
                      seatNumber={seat.seat}
                      isSelected={selectedSeats.includes(seat.seat)}
                      available={seat.available}
                      onClick={() => handleSeatClick(seat.seat)}
                    />
                  ) : (
                    <div className="unavailable" />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <p className="selectedseats mt-3">
        Selected Seats: {selectedSeats.join(", ")}
      </p>
    </div>
  );
};

export default SeatMap;
