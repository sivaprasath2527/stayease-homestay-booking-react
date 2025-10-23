import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/darkmode.css"; // Dark/Light mode CSS
import Home from "./pages/Home";
import Booking from "./pages/Booking"; // add at top
import Admin from "./pages/Admin"; // add this import
import Navbar from "./components/Navbar";


function App() {
     // State to store all bookings
  const [bookings, setBookings] = useState([]);

  const handleBooking = (bookingData) => {
    setBookings((prev) => [...prev, bookingData]);
  };

  return (
    <Router>
      <Navbar /> {/* DarkModeToggle inside Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Future routes */}
        {/* <Route path="/details/:id" element={<Details />} /> */}
        {/* <Route path="/admin" element={<Admin />} /> */}
         <Route
            path="/booking/:id"
            element={<Booking handleBooking={handleBooking} />}
        />
        <Route path="/admin" element={<Admin bookings={bookings} />} />
        {/* Future Admin route */}
      </Routes>
    </Router>
  );
}

export default App;




// import React from "react";
// import "./styles/darkmode.css";
// import DarkModeToggle from "./components/DarkModeToggle";

// function App() {
//   return (
//     <div className="App text-center mt-5">
//       <h1>StayEase 🏡</h1>
//       <p>Welcome to your Homestay Booking App</p>
//       <DarkModeToggle /> {/* ✅ toggle button visible here */}
//     </div>
//   );
// }

// export default App;