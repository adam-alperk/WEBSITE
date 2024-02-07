import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link
import "../App.css";
import Rive from "rive-react";

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="navigation">
          <Link to="/work" className="navButton">
            Work
          </Link>
          <Link to="/about" className="navButton">
            About
          </Link>
        </div>
        <div className="main">
          <Rive src="/cursor_tracking2.riv" className="rive" />
          <h1>adigoj</h1>
          <h2>Music and Sound Design</h2>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
