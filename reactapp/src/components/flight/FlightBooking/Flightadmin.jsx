import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import api from "../../../utils/api";

function Flightadmin() {
  const [flight, setFlight] = useState({
    fromLocation: "",
    dropLocation: "",
    departureDate: "",
    flightNumber: "",
    airline: "",
    arrivalDate: "",
    price: "",
  });

  // destructuring data inside hotel state/object
  const {
    fromLocation,
    dropLocation,
    departureDate,
    airline,
    flightNumber,
    arrivalDate,
    price,
  } = flight;

  const onInputChange = (e) => {
    setFlight({ ...flight, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await api.post("/flights/add", flight).then(
      (res) => {
        console.log(res);
        toast.success("Flight Added Successfully", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      },
      (error) => {
        console.log(error);
        toast.error("Signup failed", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    );
    // navigate("/hotel");
  };

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = (data) => {
  //   console.log(data);
  //   // postData(data);
  // };

  return (
    <>
      <ToastContainer />
      <div className="container bg-light mt-3 p-4">
        <form onSubmit={(e) => onSubmit(e)}>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputState">Flight no.</label>
              <input
                type="number"
                class="form-control"
                id="inputCity"
                name="flightNumber"
                value={flightNumber}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div class="form-group col-md-6">
              <label for="inputState">Airlines</label>
              <select
                id="inputState"
                class="form-control"
                name="airline"
                value={airline}
                onChange={(e) => onInputChange(e)}
              >
                <option selected>Choose...</option>
                <option value="IndiGo">IndiGo</option>
                <option value="AirAsia">AirAsia</option>
                <option value="Virgin Australia">Virgin Australia</option>
                <option value="Kingfisher">Kingfisher</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div class="form-group col-md-6">
              <label for="inputState">Origin</label>
              <select
                id="inputState"
                class="form-control"
                name="fromLocation"
                value={fromLocation}
                onChange={(e) => onInputChange(e)}
              >
                <option selected>Choose...</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Vikshakapatnam">Vikshakapatnam</option>
                <option value="Bangloore">Bangloore</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Chennai">Chennai</option>
                <option value="Delhi">Delhi</option>
                <option value="Pune">Pune</option>
                <option value="Kolkatta">Kolkatta</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label for="inputState">Destination</label>
              <select
                id="inputState"
                class="form-control"
                name="dropLocation"
                value={dropLocation}
                onChange={(e) => onInputChange(e)}
              >
                <option selected>Choose...</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Vikshakapatnam">Vikshakapatnam</option>
                <option value="Bangloore">Bangloore</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Chennai">Chennai</option>
                <option value="Delhi">Delhi</option>
                <option value="Pune">Pune</option>
                <option value="Kolkatta">Kolkatta</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div class="form-group col-md-6">
              <label for="dateInput">ArrivalDate:</label>
              <input
                type="date"
                class="form-control"
                id="dateInput"
                name="arrivalDate"
                value={arrivalDate}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="dateInput">DepartureDate:</label>
              <input
                type="date"
                class="form-control"
                id="dateInput1"
                name="departureDate"
                value={departureDate}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">price</label>
              <input
                type="number"
                class="form-control"
                id="inputCity"
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>

          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default Flightadmin;
