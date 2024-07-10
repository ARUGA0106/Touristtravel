import React from "react";
import { Link } from "react-router-dom";

function CarSearch(props) {
  const setWindowLocation = () => {
    window.localStorage.setItem("currentImage", props.image);
    window.localStorage.setItem("Heading", props.title);
    window.localStorage.setItem("dropLocation", props.dropLocation);
    window.localStorage.setItem("pickUpLocation", props.pickUpLocation);
    window.localStorage.setItem('cabId', props.cabId);
    window.localStorage.setItem("price", props.price);
  };
  return (
    <>
      <div className="col-md-4 col-sm-6 ">
        <div class="card m-3" style={{ width: "18rem" }}>
          <img class="card-img-top" src={props.image} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">
              {props.pickUpLocation} to {props.dropLocation}
            </p>
            <p class="card-text">${props.price}</p>
            {/* <button
              className="btn btn-primary view-details-btn"
              onClick={setWindowLocation}
            >
              <Link to="/View" className="text-white">
                ViewDetails
              </Link>
            </button> */}
            <button
              className="btn btn-primary view-details-btn"
              onClick={setWindowLocation}
            >
              <Link to="/View" className="text-white">
                ViewDetails
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarSearch;
