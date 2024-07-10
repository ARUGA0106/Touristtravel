import React from "react";
import { Link } from "react-router-dom";

const Carview = () => {
  const image = window.localStorage.getItem("currentImage");
  const Heading = window.localStorage.getItem("Heading");
  // const Description = window.localStorage.getItem("Description");
  const pickUpLocation = window.localStorage.getItem("pickUpLocation");
  const dropLocation = window.localStorage.getItem("dropLocation");
  const price = window.localStorage.getItem("price");

  return (
    <div className="container my-3">
      <div className="row card">
        <div className="col-lg-12 mt-5 card">
          <div className="py-4">
            <img
              src={image}
              alt="car"
              className="car_image text-center"
              style={{
                width: "70%",
                height: "100%",
              }}
            />
          </div>
          <h3 className="text text-center">{Heading}</h3>
          {/* <div>
    We have different types of Car like Miniature cars,Sedan Cars,Suv Cars,Mpv Cars,The Sedan and Suv cars are similar in capacity but different in boot space.In Mini Cars only four members able to travel.But in MPV whole family can travel.Mini Cars are Economic in class! According to Car Types Travelling cost will be Differ, Choose your best Cab!!!
    </div> */}
          <div>
            {Heading} cars are also great for family usage!!! In {Heading} cars,
            members can travel easily, although there is limited boot space.
          </div>
          <br />
          <h6 className="text-primary">Location: </h6>
          <h5>
            {pickUpLocation} to {dropLocation}
          </h5>
          <h5>${price}</h5>
          <div className="col-lg-8 bank_offers py-3 my-5">
            <p className="text ">SBI Bank Offers</p>
            <div className="d-flex flex-row ">
              <button className="btn btn-sm btn-dark">USE CODE </button>
              <button>40%</button>
            </div>
            <div className="bookNowDiv mt-2">
              <button className="btn btn-primary ">
                {/* <a href="/book" style={{color:"blue"}}>Book Now</a> */}
                <Link to="/Carbooking" className="text-white" Onclick>
                  Book Now
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carview;
