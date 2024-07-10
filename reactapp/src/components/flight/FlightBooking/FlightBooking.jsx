import React, { useState } from "react";
import { Select } from "antd";
import SeatSelection from "./SeatSelection";
import { Link } from "react-router-dom";
import api from "../../../utils/api";
import { useNavigate } from "react-router-dom";

const FlightBooking = () => {
  const image = window.localStorage.getItem("currentImage");
  const Heading = window.localStorage.getItem("Heading");
  const flight_Id_prop = window.localStorage.getItem("flightNumber");
  const price = window.localStorage.getItem("price");

  //const [flightData, setFlightData] = useState([]);

  const [flightBooking, setFlightBooking] = useState({
    FlightlId: flight_Id_prop,
    custName: "",
    custGender: "",
    custEmail: "",
    custPhone: "",
    custAddress: "",
    departureDate: "",
    fromLocation: "",
    dropLocation: "",
    paymentStatus: "false",
    totalCost: "",
    selectedSeats: "",
    passengers: 0,
  });

  // destructuring data inside flight state/object
  const {
    FlightlId,
    custName,
    custGender,
    custEmail,
    custPhone,
    custAddress,
    departureDate,
    fromLocation,
    dropLocation,
    paymentStatus,
    totalCost,

    passengers,
  } = flightBooking;

  const onInputChange = (e) => {
    setFlightBooking({ ...flightBooking, [e.target.name]: e.target.value });
  };

  const calcTotalCost = () => {
    return price * passengers;
  };

  const handleSelectedSeatsChange = (selectedSeats) => {
    setSelectedSeats(selectedSeats);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const calculatedTotalCost = calcTotalCost(); // Calculate totalCost before submitting the data
    const updatedFlightBooking = {
      ...flightBooking,
      totalCost: calculatedTotalCost,
      selectedSeats: selectedSeats.join(","), // Include the selected seats in the flight booking data
    };
    try {
      const response = await api.post("/flights/book", updatedFlightBooking);
      if (response.status === 200) {
        // Data posting to the server was successful
        alert("Success");
        window.location.href = "/payment";
        // Redirect to next page
      } else {
        alert("Failed to book the hotel. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const [selectedSeats, setSelectedSeats] = useState([]);

  // Create a function to update the selected seats state in FlightBooking
  // const handleSelectedSeatsChange = (selectedSeats) => {
  //   setSelectedSeats(selectedSeats);
  // };

  const updatedFlightBooking = {
    ...flightBooking,
    totalCost: calcTotalCost,
  };

  

  const navigate = useNavigate();
  const handleNavigate = () => {
    const propsToPass = {
      facility: Heading,
      location: flightBooking.fromLocation,
      username: flightBooking.custName,
      travellers: flightBooking.passengers,
      address: flightBooking.custAddress,
      balance: price,
      date: flightBooking.departureDate,
      total: FlightBooking.totalCost,
    };

    // Use the navigate function and pass the props as the second argument
    navigate("/payment", { state: propsToPass });
  };

  return (
    <div className="container">
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="row card location-details mt-3">
          <div className="col-lg-12 mt-2">
            <h5 className="font-bold">Flight Summary</h5>
            <div className="row pb-4">
              <div className="col-lg-2 text-center p-3">
                <img
                  className="w-50 h-50 rounded-circle"
                  src={image}
                  alt="Flight"
                />
                <h6 className="font-bold1 mt-2">{Heading}</h6>
              </div>
              <div className="col-lg-2 card p-3 m-2">
                <p className="mt-2">From Location</p>
                <Select
                  defaultValue="chennai"
                  onChange={(e) => {
                    setFlightBooking({ ...flightBooking, fromLocation: e });
                  }}
                  options={[
                    {
                      value: "Hyderabad",
                      label: "Hyderabad",
                    },
                    {
                      value: "Chennai",
                      label: "Chennai",
                    },
                    {
                      value: "Bangloore",
                      label: "Bangloore",
                    },
                    {
                      value: "Trichy",
                      label: "Trichy",
                    },
                    {
                      value: "Delhi",
                      label: "Delhi",
                    },
                    {
                      value: "Salem",
                      label: "Salem",
                    },
                    {
                      value: "Pune",
                      label: "Pune",
                    },
                    {
                      value: "Kolkatta",
                      label: "Kolkatta",
                    },
                  ]}
                />
              </div>

              <div className="col-lg-2 card p-3 m-2">
                <p className="mt-2">To Location</p>
                <Select
                  defaultValue="Trichy"
                  onChange={(e) => {
                    setFlightBooking({ ...flightBooking, dropLocation: e });
                  }}
                  options={[
                    {
                      value: "Chennai",
                      label: "Chennai",
                    },
                    {
                      value: "Vikshakapatnam",
                      label: "Vikshakapatna",
                    },
                    {
                      value: "Bangloore",
                      label: "Bangloore",
                    },
                    {
                      value: "Mumbai",
                      label: "Mumbai",
                    },
                    {
                      value: "Chennai",
                      label: "Chennai",
                    },
                    {
                      value: "Delhi",
                      label: "Delhi",
                    },
                    {
                      value: "Pune",
                      label: "Pune",
                    },
                    {
                      value: "Kolkatta",
                      label: "Kolkatta",
                    },
                  ]}
                />
              </div>

              <div className="col-lg-2 card p-3 m-2">
                <p className="mt-2">Departure Date</p>
                <input
                  type="date"
                  class="form-control"
                  id="dateInput"
                  name="departureDate"
                  value={departureDate}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="col-lg-2 card p-3 m-2">
                <p className="mt-2">Passengers</p>
                <Select
                  defaultValue="1"
                  onChange={(e) => {
                    setFlightBooking({ ...flightBooking, passengers: e });
                  }}
                  options={[
                    {
                      value: "1",
                      label: "1",
                    },
                    {
                      value: "2",
                      label: "2",
                    },
                    {
                      value: "3",
                      label: "3",
                    },
                    {
                      value: "4",
                      label: "4",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row card passenger-details">
          <div className="p-3 col-lg-12">
            <h5 className="font-bold">Passenger Details</h5>
            <div className="full-col">
              <div className="form-row my-4">
                <div className="form-group col-md-6">
                  <label
                    htmlFor="passenger_name"
                    className="d-inline-block col-lg-2 col-md-12"
                  >
                    Name:
                  </label>
                  <input
                    className="form-control d-inline-block col-md-9"
                    type="text"
                    id="passenger_name"
                    name="custName"
                    value={custName}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label
                    htmlFor="passenger_email"
                    className="d-inline-block col-lg-2 col-md-12"
                  >
                    Email:
                  </label>
                  <input
                    className="form-control d-inline-block col-md-9"
                    type="email"
                    id="passenger_email"
                    name="custEmail"
                    value={custEmail}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label
                    htmlFor="phoneNumber"
                    className="d-inline-block col-lg-2 col-md-12"
                  >
                    Mobile:
                  </label>
                  <input
                    type="text"
                    className="form-control d-inline-block col-md-9 "
                    name="custPhone"
                    value={custPhone}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group col-md-6">
                  <p className="d-inline-block col-lg-2 col-md-12">Gender:</p>
                  <div className="form-check col-md-3 d-inline-block">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="custGender"
                      value="Male"
                      checked={flightBooking.custGender === "Male"}
                      onChange={(e) => onInputChange(e)}
                    />
                    <label
                      className="form-check-label d-inline-block"
                      htmlFor="male"
                    >
                      Male
                    </label>
                  </div>

                  <div className="form-check col-md-3 d-inline-block">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="custGender"
                      value="Female"
                      checked={flightBooking.custGender === "Female"}
                      onChange={(e) => onInputChange(e)}
                    />
                    <label
                      className="form-check-label d-inline-block"
                      htmlFor="female"
                    >
                      Female
                    </label>
                  </div>
                </div>
              </div>
              <div className="text-center">
                {/* <button
                  type="submit"
                  className="btn btn-outline-primary button"
                  onClick={handleSubmit}
                >
                  Add Passenger
                </button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row card d-block">
          <div className="col p-3 col-lg-12 seats-details">
            <h5 className="p-2 font-bold">Seats</h5>

            <div className="row pb-6 m-3">
              <div className="col-lg-8 ">
                <SeatSelection
                  selectedSeats={selectedSeats}
                  onSelectedSeatsChange={handleSelectedSeatsChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row card button-info mb-5 p-3">
          <div className="terms-condition">
            <p>
              By clicking on the Book button below to proceed with the booking,
              I confirm that I have read and I accept the
              <a href="">Fare Rules</a>, <a href="">the Privacy Policy</a>,
              <a href="">the User Agreement</a> and
              <a href="">Terms of Service</a>.
            </p>
          </div>
          <div className="button1">
            <button
              type="submit"
              className="btn btn-primary button1"
              onClick={handleNavigate}
            >
              {/* <Link to="/payment" className="text-white" > */}
              Book Now
              {/* </Link> */}
            </button>
          </div>
          <Link to="/flighthistory">Go to History</Link>
        </div>
      </form>

      {/* {
              flightData.map(flight=>(<li key={flight.flightNumber}>{flight.id}
                Id:{flight.flightNumber}
                Origin:{flight.origin}
                Destination:{flight.destination}
                DepartureDate:{flight.departureDate}
                passengers:{flight.passengers}
              </li>))
            }     */}
    </div>
  );
};

export default FlightBooking;
