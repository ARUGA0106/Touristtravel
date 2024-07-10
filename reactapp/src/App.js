import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
// import CartPage from "./components/Cart/Cart";
import Login from "./components/Login/Login";
// import Accordion from "./components/HelpAndSupport/FAQ/faq";

import Success from "./components/Success/Success";
import Signup from "./components/Signup/Signup";
import Pay from "./components/Payment/Pay";
import PayHome from "./components/Payment/PayHome";
// import Signup from "./components/Signup/Signup";

// after pull from rajii
import Home from "./components/home/pages/Home";
import UserProfile from "./components/UserProfile/userProfile";
import Accordion from "./components/FAQ/faq";
import FeedbackForm from "./components/Feedback/Feedback";
import ContactFormtwo from "./components/HelpAndSupport/helpandSupport";

// after pull from deepak
import CarHome from "./components/cars/CarHome";
import Carview from "./components/cars/ViewCar";
import CarBooking from "./components/cars/CarBooking";
import Adminadd from "./components/cars/Adminadd";

// after pull from moulesh
import FlightHomePage from "./components/flight/FlightHomePage/HomePage";
import ViewFlight from "./components/flight/FlightHomePage/ViewFlight";
import FlightBooking from "./components/flight/FlightBooking/FlightBooking";
import FlightHistory from "./components/flight/FlightBooking/FlightHistory";

// after pull from bhagya and raj
import HotelHomePage from "./components/Hotels/HomePage";
import ViewHotel from "./components/Hotels/ViewHotel";
import HotelBooking from "./components/Hotels/HotelBooking";
import Hoteladmin from "./components/Hotels/Hoteladmin";

import History from "./components/History/History";

import { useContext } from "react";
import { TokenContext } from "./utils/TokenContext";
import Flightadmin from "./components/flight/FlightBooking/Flightadmin";

function App() {
  const { decodedToken } = useContext(TokenContext);
  return (
    <>
      <Router>
        <Navbar isLogin={!decodedToken ? false : true} />
        <Routes>
          {/* sakshi */}
          <Route path="/login" element={<Login />} />
          {/* <Route path="/cart" element={<CartPage />} /> */}

          {/* alok */}
          <Route
            path="/success"
            element={<Success booking="1" id="12345678" />}
          />
          <Route path="/signup" element={<Signup />} />

          <Route path="/" element={<Home />} />

          <Route path="/payment" element={<PayHome />} />
          <Route exact path="/pay" element={<Pay />} />

          {/* rajii */}

          <Route path="/profile" element={<UserProfile />} />
          <Route path="/faq" element={<Accordion />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/help" element={<ContactFormtwo />} />
          <Route path="/history" element={<History />} />

          {/* deepak */}
          <Route path="/car" element={<CarHome />} />
          <Route path="/View" element={<Carview />} />
          <Route path="/carbooking" element={<CarBooking />} />
          <Route path="/caradmin" element={<Adminadd />} />

          {/* moulesh */}
          <Route path="/flight" element={<FlightHomePage />} />
          <Route path="/viewDetails" element={<ViewFlight />} />
          <Route path="/flightbooking" element={<FlightBooking />} />
          <Route path="/flighthistory" element={<FlightHistory />} />
          <Route path="/flightadmin" element={<Flightadmin />} />

          {/* bhaygya & raj */}
          <Route path="/hotel" element={<HotelHomePage />} />
          <Route path="/viewhotel" element={<ViewHotel />} />
          <Route path="/hotelbooking" element={<HotelBooking />} />
          <Route path="/hoteladmin" element={<Hoteladmin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
