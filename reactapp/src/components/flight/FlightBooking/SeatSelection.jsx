import React, { useState } from "react";
import SeatMap from "./SeatMap";
import { seatMap } from "./stores/seatMap";

const SeatSelection = ({ selectedSeats, onSelectedSeatsChange }) => {
  return (
    <div className="seat-selection-container">
      <h6 className="seat-choosing">You Can Choose Your Seat</h6>

      <SeatMap
        seatMap={seatMap}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={onSelectedSeatsChange}
      />
    </div>
  );
};
export default SeatSelection;
