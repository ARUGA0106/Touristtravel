import { ToastContainer, toast } from "react-toastify";
import api from "../../utils/api.js";
import React, { useState } from "react";

function Adminadd() {
  const [cab, setCab] = useState({
    pickUpLocation: "",
    dropLocation: "",
    pickUpDate: "",
    dropOffDate: "",
    cabType: "",
    cabPrice: "",
  });

  // destructuring data inside cab state/object
  const {
    pickUpLocation,
    dropLocation,
    pickUpDate,
    dropOffDate,
    cabType,
    cabPrice,
  } = cab;

  const onInputChange = (e) => {
    setCab({ ...cab, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await api.post("/rental_cars/cabs", cab).then(
      (res) => {
        console.log(res);
        toast.success(" Car Added Successfully", {
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
  //   postData(data);
  // };

  // const postData = (data) => {
  //   api.post("", data).then(
  //     (res) => {
  //       console.log(res);
  //       const { token } = res.data;
  //       localStorage.setItem("token", token);
  //       window.location.reload();
  //       toast.success("Signup Successfully", {
  //         position: "bottom-left",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "colored",
  //       });
  //     },
  //     (error) => {
  //       console.log(error);
  //       toast.error("Signup failed", {
  //         position: "bottom-left",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "colored",
  //       });
  //     }
  //   );
  // };

  return (
    <>
      <ToastContainer />
      <div className="container bg-light mt-3 p-4">
        <form onSubmit={(e) => onSubmit(e)}>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputState">Car Type</label>
              <select
                id="inputState"
                class="form-control"
                name="cabType"
                value={cabType}
                onChange={(e) => onInputChange(e)}
              >
                <option selected>Choose...</option>
                <option value="Sedan">Sedan</option>
                <option value="Hatchback">Hatchback</option>
                <option value="SUV">SUV</option>
                <option value="MPV">MPV</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div class="form-group col-md-6">
              <label for="inputState">Pickup</label>
              <select
                id="inputState"
                class="form-control"
                name="pickUpLocation"
                value={pickUpLocation}
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
              <label for="inputState">Drop</label>
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
              <label for="dateInput">pickupDate:</label>
              <input
                type="date"
                class="form-control"
                id="dateInput"
                name="pickUpDate"
                value={pickUpDate}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="dateInput">DropDate:</label>
              <input
                type="date"
                class="form-control"
                id="dateInput1"
                name="dropOffDate"
                value={dropOffDate}
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
                name="cabPrice"
                value={cabPrice}
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

export default Adminadd;
