import React, { useState, useEffect } from "react";
import Styles from "./HomePage.module.css";
import Flight from "./Flight";
import FlightSearch from "./FlightSearch";
import FirstImage from "../images/flight_in.avif";
import { DatePicker, Select } from "antd";
import { Link } from "react-router-dom";
import api from "../../../utils/api";

const { RangePicker } = DatePicker;
const FlightHomePage = () => {
  const decodedToken = JSON.parse(localStorage.getItem("decodedToken"));
  const [imageState, setImageState] = useState("");


  const [data, setdata] = useState({ fromLocation: '', dropLocation: '', departureDate: '' });

  const [flights, setFlights] = useState([]);
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);

  const handlesubmit = () => {
    // Destructure the data state to get individual search parameters
    const { fromLocation, dropLocation, departureDate } = data;

    // Perform the API call to retrieve hotels based on the search parameters
    api.get(`/flights/flights/search?fromLocation=${fromLocation}&dropLocation=${dropLocation}&departureDate=${departureDate}`)
      .then((response) => setFlights(response.data))
      .catch((error) => {
        console.error('Error fetching flights:', error);
      });

    // Set the isSearchPerformed to true after the search button is clicked
    setIsSearchPerformed(true);
  };

  // useEffect(() => {

  //   loadUsers();
  // }, []);

  // const loadUsers = async () => {
  //   const result = await api.get('http://localhost:8080/flights/search');
  //   console.log(result.data);

  //   setFlightData(result.data);
  // };

  return (
    <div className="container mt-5">
      <h3>Flight</h3>

      {decodedToken
        ? decodedToken.role === "ADMIN" && (
          <div>
            <button className="btn btn-primary ">
              <Link className="text-white" to="/flightadmin">
                ADMIN ADD
              </Link>{" "}
            </button>
          </div>
        )
        : ""}

      <div className={`row ${Styles.firstRow}`}>
        <p className={Styles.textCenter}>
          Book Domestic and International Property Online. To list your property{" "}
          <span>
            <a href="/">click here</a>
          </span>
        </p>
        <div className="col-lg-12 mt-2">
          <div className="row pb-4">
            <div className="col-lg-2 card p-3 m-2">
              <p className="mt-2">From Location</p>
              <Select
                defaultValue="chennai"
                onChange={(e) => {
                  setdata({ ...data, fromLocation: e });
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
                    value: "Kolkata",
                    label: "Kolkata",
                  },
                ]}
              />
            </div>
            <div className="col-lg-2 card p-3 m-2">
              <p className="mt-2">To Location</p>
              <Select
                defaultValue="Trichy"
                onChange={(e) => {
                  setdata({ ...data, dropLocation: e });
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
                    value: "Kolkata",
                    label: "Kolkata",
                  },
                ]}
              />
            </div>
            <div className="col-lg-2 card p-3 m-2">
              <p className="mt-2">Departure Date</p>
              <input
                type="date"
                id="departureDate"
                onChange={(e) => {
                  setdata({ ...data, departureDate: e.target.value });
                }}
              />
            </div>
            <div className="col-lg-2 card p-3 m-2">
              <p className="mt-2">Passengers</p>
              <Select
                defaultValue="1"
                onChange=""
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
            <div className="col-lg-2 card p-3 m-2">
              <p className="mt-2">Travellers</p>
              <Select
                defaultValue="FirstClass"
                onChange=""
                options={[
                  {
                    value: "FirstClass",
                    label: "FirstClass",
                  },
                  {
                    value: "SecondClass",
                    label: "SecondClass",
                  },
                  {
                    value: "EconomyClass",
                    label: "EconomyClass",
                  },
                  {
                    value: "BusinessClass",
                    label: "BusinessClass",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`row ${Styles.secondRow}`}>
        <div>
          <button className={Styles.searchBtn} onClick={handlesubmit}>
            SEARCH
          </button>
        </div>
      </div>

      {isSearchPerformed && (
        <div className="row mt-5">
          {/* Display the retrieved flights */}
          {flights.length > 0 ? (
            flights.map((flight) => (
              <FlightSearch
                key={flight.flightnumber}
                title={flight.airline}
                fromLocation={flight.fromLocation}
                image={FirstImage} 
                price={flight.price}
                flightId={flight.flightnumber}
              />
            ))
          ) : (
            <p>No Flights found.</p>
          )}

        </div>)}

      <div className={`row ${Styles.thirdRow} py-3`}>
        <div className="col-lg-12 card">
          <div className="d-flex flex-row justify-content-around ">
            <h3>Offers</h3>
            <p>Hotels</p>
            <p>All Offers</p>
            <p>Flights</p>
            <p>Holidays</p>
            <p>Trains</p>
            <p>Cabs</p>
            <p>Bank Offers</p>
          </div>
        </div>

        <Flight
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AirAsia_New_Logo.svg/1200px-AirAsia_New_Logo.svg.png"
          setImageState={setImageState}
          Heading="AirAsia"
          Description="It is the largest airline in Malaysia by fleet size and destinations. AirAsia operates scheduled domestic and international flights to more than 165 destinations spanning 25 countries"
        />
        <Flight
          image="https://upload.wikimedia.org/wikipedia/commons/5/5a/Airbus_A320-232%2C_IndiGo_Airlines_JP7701002.jpg"
          setImageState={setImageState}
          Heading="IndiGo"
          Description="IndiGo is India’s largest passenger airline with a domestic market share of 57.5% as of April, 2023. We primarily operate in India’s domestic air travel market as a low-cost carrier.."
        />
        <Flight
          image="https://www.finder.com.au/finder-au/wp-uploads/2018/05/VA-and-VS-tail-tips-450.jpg"
          setImageState={setImageState}
          Heading="Virgin Australia"
          Description="Fly with award-winning service and great value fares to popular destinations across Australia. We can't wait to welcome you onboard Virgin Australia soon.."
        />
        <Flight
          image="https://www.businessinsider.in/thumb.cms?msid=51612220&width=1200&height=900"
          setImageState={setImageState}
          Heading="Kingfisher"
          Description="It has a fleet of over 66 aircrafts comprising of the Airbus and ATR aircrafts. It flies domestic and international flights with more than 350 daily departures and connects over 60 cities in India and 10 international destinations.."
        />
      </div>
      {/* {flightData.map((flight) => (
        <li key={flight.flightNumber}>
          {flight.id}
          Id:{flight.flightNumber}
          Origin:{flight.origin}
          Destination:{flight.destination}
          DepartureDate:{flight.departureDate}
          passengers:{flight.passengers}
        </li>
      ))} */}
    </div>
  );
};

export default FlightHomePage;
