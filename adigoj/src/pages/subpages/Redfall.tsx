// Redfall Project Page
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link
import YouTube from "react-youtube";
import "../../App.css";
import "./ProjectPages.css";

const Redfall = () => {
  const videoOptions = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container" id="page">
        <div className="navigation" id="second">
          <Link to="/" className="navButton">
            Home
          </Link>
          <Link to="/work" className="navButton">
            Work
          </Link>
        </div>
        <div className="project-section">
          <h1 id="heading">Redfall</h1>
          <h2 id="subheading">Re-Sound Design of Redfall Game Trailer</h2>
          <YouTube videoId="LzFCTgei-MQ" opts={videoOptions} />
        </div>
      </div>
    </motion.div>
  );
};

export default Redfall;
