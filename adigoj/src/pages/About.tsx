import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link
import "../App.css";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="navigation">
          <Link to="/" className="navButton">
            Home
          </Link>
          <Link to="/work" className="navButton">
            Work
          </Link>
        </div>
        <h1>About</h1>
      </div>
    </motion.div>
  );
}

export default About;
