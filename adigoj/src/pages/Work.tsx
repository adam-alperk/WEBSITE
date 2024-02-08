// Work.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link
import ProjectCard from "../assets/Card";
import "../App.css";

const Work = () => {
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
          <Link to="/about" className="navButton">
            About
          </Link>
        </div>
        <h1 id="heading">Work</h1>
        <div className="section">
          <div className="project-cards">
            <ProjectCard
              name="Redfall Trailer"
              imageUrl="../../public/images/sd-cards/Redfall.webp"
              websiteUrl="www.google.com"
            />
            <ProjectCard
              name="Paper Samurai"
              imageUrl="../../public/images/sd-cards/PaperSamurai.webp"
              websiteUrl="www.google.com"
            />
            <ProjectCard
              name="Transformers"
              imageUrl="../../public/images/sd-cards/Transformers.webp"
              websiteUrl="www.google.com"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
