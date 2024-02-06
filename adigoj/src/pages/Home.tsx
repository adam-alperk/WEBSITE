import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "../App.css";
import Rive from "rive-react";

const Home: React.FC = () => {
  return (
    <div className="bg">
      <div className="container">
        <Rive src="/cursor_tracking2.riv" className="rive" />
        <h1>adigoj</h1>
        <h2>Music and Sound Design</h2>
        <div className="navigation">
          <Link to="/work" className="navButton">
            Work
          </Link>
          <Link to="/about" className="navButton">
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
