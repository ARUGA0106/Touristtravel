import React, { useEffect, useState } from "react";
import FirstImage from "../images/flight_in.avif";

// import "./History.css";

const FlightHistory = () => {
  const [flightData, setFlightData] = useState([]);

  // useEffect(() => {

  //   loadUsers();
  // }, []);

  // const loadUsers = async () => {
  //   const result = await api.get('http://localhost:8080/flights/search');
  //   console.log(result.data);

  //   setFlightData(result.data);
  // };

  return (
    <div className="container">
      <div className="row mb-4">
        <h5 className="history_heading mt-4 mb-4">Your Booking History</h5>
        {flightData.map((flight) => (
          <div className="col-lg-12 card history_card">
            <div className="row">
              <div className="col-lg-8 mt-4 mb-3 text-center">
                <img
                  src={FirstImage}
                  width="580"
                  height={300}
                  alt="flight"
                  className="history_image mr-10 mb-5"
                />
              </div>

              <div className="col-lg-4 mt-5">
                <h5>Your Flight Booking Details</h5>
                <p>AirLine : {flight.airline}</p>
                <p>From Location: {flight.origin}</p>
                <p>To Location: {flight.destination}</p>
                <p>Departure Date: {flight.departureDate}</p>
                <p>Passengers: {flight.passengers}</p>
                {/* Add more flight details as needed */}
                <button className="cancelBtn btn btn-sm btn-warning mb-4">
                  Cancel Booking
                </button>
              </div>
            </div>
          </div>
        ))}

        {
			<div className='col-lg-12 mt-3 card history_card'>
                    <div className="row">

                        <div className='col-lg-8 mt-4 mb-3 text-center'>
                            <img src={SecondImage} width="580" height={300} alt="hotel" className="history_image" />
                        </div>

                        <div className='col-lg-4 mt-5'>
                            <h5>Your Flight Booking Details</h5>
                            <p>From Location - Bangloore</p>
                            <p>To Location - Trichy</p>
                            <p>Passengers - 2 </p>
                            <p>Seat number : 3A,3B</p>
                            <p>Payment Status - Paid</p>
                            <button className='cancelBtn btn btn-sm btn-warning'>Cancel Booking</button>
                        </div>
                    </div>
                    
                </div>


                <div className='col-lg-12 mt-3 card history_card'>
                    <div className="row">
                       
                        <div className='col-lg-8 mt-4 mb-3 text-center'>
                            <img src={ThirdImage} width="580" height={300} alt="hotel" className="history_image" />
                        </div>
                  
                        <div className='col-lg-4 mt-5'>
                            <h5>Your Flight Booking Details</h5>
                            <p>From Location - Delhi</p>
                            <p>To Location - Mumbai</p>
                            <p>Passengers - 1 </p>
                            <p>Seat number : 2A</p>
                            <p>Payment Status - Paid</p>
                            <button className='cancelBtn btn btn-sm btn-warning'>Cancel Booking</button>
                        </div>
                    </div>
                    
            </div>
		}
      </div>
    </div>
  );
};

export default FlightHistory;
