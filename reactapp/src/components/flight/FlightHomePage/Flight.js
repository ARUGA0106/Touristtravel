import React from 'react'
import Styles from "./HomePage.module.css";
import { Link } from 'react-router-dom';

const Flight = ({ image, Heading, Description, setImageState }) => {
  const setWindowLocation = () => {
    window.localStorage.setItem('currentImage', image);
    window.localStorage.setItem("Heading", Heading);
    window.localStorage.setItem("Description", Description);
  }
  return (
    <div className='card col-lg-5 my-3 py-3 mx-3'>
      <div className='row'>
        <div className='col-lg-5'>
          <img src={image} width={"150px"} height={"150px"} alt="Flight" />
        </div>
        <div className='col-lg-7'>
          <p className={`${Styles.FlightName}`}>{Heading}</p>
          <p className='text text-justify'>{Description}</p>
          <div className={`${Styles.viewDetailsBtnDiv}`}>
            <button className={`${Styles.viewDetailsBtn}`}
              onClick={setWindowLocation}>
              {/*<a href={`/viewDetails/image/Heading/`} className="text text-white">View Details</a>*/}
              <Link to="/viewDetails" className='text-white'>View Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Flight