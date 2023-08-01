import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router for routing
import "./Home.css";
const Home = (props) => {
  return (
    <div className="homepage-container">
      <div className="welcome-card">
        <h2>{props.name ? `Welcome - ${props.name}` : "Login Please"}</h2>
      </div>
      <div className="buttons-container">
        <h1>
          <Link to="/login" className="button">
            Login
          </Link>
        </h1>
        <h1>
          <Link to="/signup" className="button">
            Signup
          </Link>
        </h1>
      </div>
    </div>
  );
};
export default Home;
