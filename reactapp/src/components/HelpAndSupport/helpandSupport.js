import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.css';
import styles from "./hlp.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMapMarker,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faCodepen,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import imageSrc from "./image.jpg";

library.add(
  faMapMarker,
  faPhone,
  faEnvelope,
  faGithub,
  faCodepen,
  faTwitter,
  faInstagram
);

const ContactFormtwo = () => {
  return (
    <div className={styles.bod}>
      <div className={styles.contact}>
        <h1 className={styles["section-header"]}>Reach US</h1>

        <div className={styles["contact-wrapper"]}>
          <img
            src={imageSrc}
            alt="Contact Image"
            className={styles["contact-image"]}
          />

          <div className={styles["direct-contact-container"]}>
            <ul className={styles["contact-list"]}>
              <li className={styles["list-item"]}>
                <FontAwesomeIcon icon="map-marker" />
                <span className={styles["contact-text place"]}>
                  City, State
                </span>
              </li>
              <li className={styles["list-item"]}>
                <FontAwesomeIcon icon="phone" />
                <span className={styles["contact-text phone"]}>
                  <a href="tel:1-212-555-5555" title="Give me a call">
                    (212) 555-2368
                  </a>
                </span>
              </li>
              <li className={styles["list-item"]}>
                <FontAwesomeIcon icon="envelope" />
                <span className={styles["contact-text gmail"]}>
                  <a href="mailto:#" title="Send me an email">
                    hitmeup@gmail.com
                  </a>
                </span>
              </li>
            </ul>

            <hr />

            <ul className={styles["social-media-list"]}>
              <li>
                <a href="#" target="_blank" className={styles["contact-icon"]}>
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className={styles["contact-icon"]}>
                  <FontAwesomeIcon icon={["fab", "codepen"]} />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className={styles["contact-icon"]}>
                  <FontAwesomeIcon icon={["fab", "twitter"]} />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className={styles["contact-icon"]}>
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                </a>
              </li>
            </ul>

            <hr />

            {/* <div className="button-row">
              <Link to="./Components/Reachus/Feedback" className="btn btn-primary button-style">
                Send Us Your Feedback
              </Link>
            </div> */}
          </div>
        </div>
      </div>
      {/* {showFeedbackForm && (
        <div className="feedback-form-overlay">
          <div className="feedback-form-container">
            <button className="close-button" onClick={handleCloseFeedbackForm}>
              Close
            </button>
            <FeedbackForm/>
          </div>
        </div>
      )} */}

      {/* <button className="go-back-button" onClick={handleGoBack}>
        Go Back
      </button> */}
    </div>
  );
};

export default ContactFormtwo;
