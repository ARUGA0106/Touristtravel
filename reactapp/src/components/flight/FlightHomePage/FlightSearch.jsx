import React from "react";
import { Link } from "react-router-dom";

function FlightSearch(props) {

  const onViewDetailsClickSave = () => {
    // const imageToSet = props.image ? props.image : defaultImage;
     window.localStorage.setItem('currentImage', props.image);
    window.localStorage.setItem('Heading', props.title);
    window.localStorage.setItem('flightNumber', props.flightNumber);
    window.localStorage.setItem('price', props.price);
    
    // window.localStorage.setItem('Description',props.Description);
  };


  return (
    <>
      <div className="col-md-4 col-sm-6 ">
        <div class="card m-3" style={{ width: "18rem" }}>
          <img class="card-img-top" src={props.image} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.description}</p>
            <p class="card-text">{props.facility}</p>
            <p class="card-text">price: ${props.price}</p>
            {/* <a href="#" class="btn btn-primary">
              view
            </a> */}
            <button
              className="btn btn-primary view-details-btn"
              onClick={onViewDetailsClickSave}
            >
              <Link to="/viewDetails" className="text-white">
                ViewDetails
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FlightSearch;
