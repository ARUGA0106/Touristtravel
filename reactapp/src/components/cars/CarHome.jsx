import React, { useState } from "react";
//import { useNavigate } from 'react-router-dom';
import CarSearch from "./CarSearch";
import Car from "./Car";

// import FirstImage from "../home/images/c1.png";
// import SecondImage from "../home/images/c1.png";
// import ThirdImage from "../home/images/c1.png";
// import FourthImage from "../home/images/c1.png";
import { DatePicker, TimePicker, Select } from "antd";
import { Link } from "react-router-dom";
import api from "../../utils/api";

const { Option } = Select;

const CarHome = () => {
  //const navigate=useNavigate();

  const [imageState, setImageState] = useState("");

  const setWindowLocation = (image, heading, description) => {
    window.localStorage.setItem("currentImage", image);
    window.localStorage.setItem("Heading", heading);
    window.localStorage.setItem("Description", description);
    window.localStorage.setItem("Description");
    window.localStorage.setItem("Description", description);
  };

  const [data, setdata] = useState({
    pickUpLocation: "",
    dropLocation: "",
    pickUpDate: "",
    dropOffDate: "",
  });

  const decodedToken = JSON.parse(localStorage.getItem("decodedToken"));
  // adding cab props
  const [cabs, setCabs] = useState([]);
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);

  const handlesubmit = () => {
    // Destructure the data state to get individual search parameters
    const { pickUpLocation, dropLocation, pickUpDate, dropOffDate } = data;

    // Perform the API call to retrieve hotels based on the search parameters

    api
      .get(
        `/rental_cars/cabs/search?pickUpLocation=${pickUpLocation}&dropLocation=${dropLocation}&pickUpDate=${pickUpDate}&dropOffDate=${dropOffDate}`
      )
      .then((response) => setCabs(response.data))
      .catch((error) => {
        console.error("Error fetching cabs:", error);
      });

    // Set the isSearchPerformed to true after the search button is clicked
    setIsSearchPerformed(true);
  };

  return (
    <div
      className="container p-5 mt-5 "
      style={{ background: "#160c34", borderRadius: "20px" }}
    >
      <h3 className="text-white">Cars</h3>

      {decodedToken
        ? decodedToken.role === "ADMIN" && (
            <div>
              <button className="btn btn-primary ">
                <Link className="text-white" to="/caradmin">
                  ADMIN ADD
                </Link>{" "}
              </button>
            </div>
          )
        : ""}

      {/* {decodedToken.role === "ADMIN" && (
        <div>
          <button className="btn btn-primary text-white">ADMIN ADD</button>
        </div>
      )} */}
      <div className="row card py-3">
        <div className="col-lg-12">
          <p className="text-center">
            Grab your car!!! And Enjoy your Vacations!!!
          </p>
          <div className="row pb-3">
            <div className="col-lg-4 card">
              <p className="">Pickup Location:</p>
              <Select
                defaultValue="Hyderabad"
                style={{ width: 200 }}
                id="pickup"
                onChange={(e) => {
                  setdata({ ...data, pickUpLocation: e });
                }}
              >
                <Option value="Hyderabad">Hyderabad</Option>
                <Option value="Vikshakapatnam">Vikshakapatnam</Option>
                <Option value="Bangloore">Bangloore</Option>
                <Option value="Mumbai">Mumbai</Option>
                <Option value="Chennai">Chennai</Option>
                <Option value="Delhi">Delhi</Option>
                <Option value="Pune">Pune</Option>
                <Option value="Kolkatta">Kolkatta</Option>
              </Select>
            </div>
            <div className="col-lg-2 card py-2">
              <p>Drop Location:</p>
              <Select
                defaultValue="Hyderabad"
                style={{ width: 165 }}
                id="drop"
                onChange={(e) => {
                  setdata({ ...data, dropLocation: e });
                }}
              >
                <Option value="Hyderabad">Hyderabad</Option>
                <Option value="Vikshakapatnam">Vikshakapatnam</Option>
                <Option value="Bangloore">Bangloore</Option>
                <Option value="Mumbai">Mumbai</Option>
                <Option value="Chennai">Chennai</Option>
                <Option value="Delhi">Delhi</Option>
                <Option value="Pune">Pune</Option>
                <Option value="Kolkatta">Kolkatta</Option>
              </Select>
            </div>
            <div className="col-lg-2 card py-2">
              <p>pickup Date:</p>
              <input
                type="date"
                id="pickupdate"
                onChange={(e) => {
                  setdata({ ...data, pickUpDate: e.target.value });
                }}
              />
            </div>
            <div className="col-lg-2 card">
              <p>Drop Date:</p>
              <input
                type="date"
                id="dropdate"
                onChange={(e) => {
                  setdata({ ...data, dropOffDate: e.target.value });
                }}
              />
            </div>
            <div className="col-lg-2 card">
              <p>Pickup Time:</p>
              <input
                type="time"
                id="pickuptime"
                onChange={(e) => {
                  setdata({ ...data, pickuptime: e.target.value });
                }}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handlesubmit}
        >
          Search
        </button>
      </div>
      {isSearchPerformed && (
        <div className="row mt-5">
          {/* Display the retrieved cabs */}
          {cabs.length > 0 ? (
            cabs.map((cab) => (
              <CarSearch
                key={cab.cabId}
                title={cab.cabType}
                pickUpLocation={cab.pickUpLocation}
                dropLocation={cab.dropLocation}
                image="https://imgd-ct.aeplcdn.com/370x231/n/cw/ec/41160/tigor-exterior-right-front-three-quarter-3.png?isig=0&q=75"
                price={cab.cabPrice}
                cabId={cab.cabId}
              />
            ))
          ) : (
            <p>No cabs found.</p>
          )}
        </div>
      )}

      <div className="row card py-3">
        <div className="col-lg-12">
          <div className="d-flex flex-row justify-content-around">
            <h3>Offers</h3>
            <p>Cabs</p>
            <p>Bank Offers</p>
          </div>
        </div>
      </div>
      <div className="row">
        <Car
          image="https://imgd-ct.aeplcdn.com/370x231/n/cw/ec/41160/tigor-exterior-right-front-three-quarter-3.png?isig=0&q=75"
          setImageState={setImageState}
          Heading="Sedan Cars"
          seat={4}
          cabId="182"
          Description="Sedan Cars are best for family usage!!! In sedan cars, five members can travel easily with ample boot space."
          setWindowLocation={setWindowLocation}
        />
        <Car
          image="https://imgd.aeplcdn.com/600x337/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=75"
          setImageState={setImageState}
          Heading="Hatchback Cars"
          seat={4}
          cabId="183"
          Description="Mini cars are best for small family usage!!! In mini cars, four members can travel comfortably with lower fuel costs."
          setWindowLocation={setWindowLocation}
        />
        <Car
          image="https://imgd.aeplcdn.com/600x337/n/cw/ec/128413/scorpio-exterior-right-front-three-quarter-46.jpeg?isig=0&q=75"
          setImageState={setImageState}
          Heading="SUV Cars"
          seat={6}
          cabId="184"
          Description="SUV cars are also great for family usage!!! In SUV cars, five members can travel easily, although there is limited boot space."
          setWindowLocation={setWindowLocation}
        />
        <Car
          image="https://imgd.aeplcdn.com/664x374/n/cw/ec/49114/marazzo-exterior-right-front-three-quarter-5.jpeg?isig=0&q=75"
          setImageState={setImageState}
          Heading="MPV Cars"
          seat={6}
          cabId="185"
          Description="MPV cars are perfect for large family travel!!! In MPV cars, more than six members can travel comfortably, but running costs may be higher."
          setWindowLocation={setWindowLocation}
        />
      </div>
    </div>
  );
};

export default CarHome;