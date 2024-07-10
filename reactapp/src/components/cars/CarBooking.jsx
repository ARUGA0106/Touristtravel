import React, { useEffect, useState } from "react";
import { DatePicker, Select } from "antd";
import { Link } from "react-router-dom";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";

// import FirstImage from "../home/images/c2.jpg";

// import './history.css';
// import 'bootstrap/dist/css/bootstrap.css';

const CarBooking = () => {
  const image = window.localStorage.getItem("currentImage");
  const Heading = window.localStorage.getItem("Heading");
  const cab_Id_prop = window.localStorage.getItem("cabId");
  const price = window.localStorage.getItem("price");
  // const [data, setData] = useState([]);

  const [cabBooking, setCabBooking] = useState({
    cabId: cab_Id_prop,
    custName: "",
    custGender: "",
    custEmail: "",
    custPhone: "",
    dropDate: "",
    pickupDate: "",
    pickupLocation: "",
    dropLocation: "",
    custAddress: "",

    paymentStatus: "false",
    totalCost: "",
  });

  // destructuring data inside hotel state/object
  const {
    cabId,
    custName,
    custGender,
    custEmail,
    custPhone,
    dropDate,
    pickupDate,
    pickupLocation,
    dropLocation,
    custAddress,

    paymentStatus,
    totalCost,
  } = cabBooking;

  const onInputChange = (e) => {
    setCabBooking({ ...cabBooking, [e.target.name]: e.target.value });
  };

  const calcTotalCost = () => {
    return price;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const calculatedTotalCost = calcTotalCost(); // Calculate totalCost before submitting the data
    const updatedCabBooking = { ...cabBooking, totalCost: calculatedTotalCost };

    try {
      const response = await api.post(
        "/rental_cars/cabs/book",
        updatedCabBooking
      );
      if (response.status === 200) {
        // Data posting to the server was successful
        alert("Success");
        window.location.href = "/payment";
        // Redirect to next page
      } else {
        alert("Failed to book the cab. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };



   const navigate = useNavigate();
   const handleNavigate = () => {
     const propsToPass = {
       facility: Heading,
       location: cabBooking.pickupLocation,
       username: cabBooking.custName,
       travellers: cabBooking.rooms,
       address: cabBooking.custAddress,
       balance: price,
       date: cabBooking.pickupDate,
       total: cabBooking.totalCost,
     };

     // Use the navigate function and pass the props as the second argument
     navigate("/payment", { state: propsToPass });
   };

  return (
    <div className="container">
      <form onSubmit={(e) => onSubmit(e)}>
        <h3 className="text-center text-primary">Booking Page</h3>

        <div className="row">
          <div className="col-sm flex-row mt-5 card">
            <div className="col-lg-7 mt-3">
              {/* <p>{Description}</p> */}
              <img
                src={image}
                mt-3
                width="580"
                height={300}
                alt="Car"
                className="history_image"
              />
            </div>

            <div className=" col-lg-12">
              <h3>{Heading}</h3>
              <br />
              <h5>{/* {pickUpLocation} to {dropLocation}  */}</h5>
              <br />
              <h5>${price}</h5>
              <ul>
                <li>Fuel Type: diesel</li>
                <li>Km Fare: $15 after 100kms</li>
              </ul>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-12 d-flex flex-row justify-content-around mt-5 card form-control-lg">
            <div>
              <p>Pickup Date</p>
              <input
                type="date"
                class="form-control"
                id="dateInput"
                name="pickupDate"
                value={pickupDate}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <p>Drop Date</p>
              <input
                type="date"
                class="form-control"
                id="dateInput"
                name="dropDate"
                value={dropDate}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <p>Pick up Location</p>
              <Select
                style={{ width: 200 }}
                name="pickupLocation"
                onChange={(e) => {
                  setCabBooking({ ...cabBooking, pickupLocation: e });
                }}
                options={[
                  { value: "Hyderabad", label: "Hyderabad" },
                  { value: "Vikshakapatnam", label: "Vikshakapatnam" },
                  { value: "Banglore", label: "Banglore" },
                  { value: "Mumbai", label: "Mumbai" },
                  { value: "Chennai", label: "Chennai" },
                  { value: "Delhi", label: "Delhi" },
                  { value: "Pune", label: "Pune" },
                  { value: "Kolkatta", label: "Kolkatta" },
                ]}
              />
            </div>
            <div>
              <p>Drop Location</p>
              <Select
                onChange={(e) => {
                  setCabBooking({ ...cabBooking, dropLocation: e });
                }}
                style={{ width: 200 }}
                options={[
                  { value: "Hyderabad", label: "Hyderabad" },
                  { value: "Vikshakapatnam", label: "Vikshakapatnam" },
                  { value: "Banglore", label: "Banglore" },
                  { value: "Mumbai", label: "Mumbai" },
                  { value: "Chennai", label: "Chennai" },
                  { value: "Delhi", label: "Delhi" },
                  { value: "Pune", label: "Pune" },
                  { value: "Kolkatta", label: "Kolkatta" },
                ]}
              />
            </div>
          </div>
        </div>
        <br />
        <div className={`col-lg-8 `}>
          <div className="mt-3">
            <label>Name:</label>
            <input
              type="text"
              className="form-control col-lg-12 mb-3"
              placeholder="Enter your Name"
              name="custName"
              value={custName}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div>
            <p>Gender:</p>
            <div class="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="custGender"
                value="Male"
                checked={cabBooking.custGender === "Male"}
                onChange={(e) => onInputChange(e)}
              />
              <label className="form-check-label">Male</label>
            </div>

            <div class="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="custGender"
                value="Female"
                checked={cabBooking.custGender === "Female"}
                onChange={(e) => onInputChange(e)}
              />
              <label class="form-check-label">Female</label>
            </div>
          </div>
          <br></br>
          <div>
            <label>Email:</label>
            <input
              type="text"
              className="form-control col-lg-12 mb-3"
              placeholder="Enter your Email"
              name="custEmail"
              value={custEmail}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div>
            <label>Mobile:</label>
            <input
              type="text"
              className="form-control col-lg-12 mb-3"
              placeholder="Enter your Mobile Number"
              name="custPhone"
              value={custPhone}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="my-5">
            <button type="submit" className="btn btn-primary bookNow" onClick={handleNavigate}>
              {/* <Link to="/payment" className="text-white"> */}
              Book now
              {/* </Link> */}
            </button>
          </div>
        </div>

        {/* {pickupDate.map(car=>(<li key={car.id}>
        Id:{car.cabId}<br/>
        Date:{car.pickUpDate}<br/>
        cabprice : {car.cabPrice}<br/>
        pick up location : {car.pickUpLocation}
      </li>))}  */}
      </form>
    </div>
  );
};

export default CarBooking;
