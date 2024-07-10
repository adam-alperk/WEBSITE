// Work.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link
import ProjectCard from "../assets/Card";
import AudioPlayer from "../assets/AudioPlayer.js";
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
              imageUrl="/images/Redfall.webp"
              websiteUrl="/work/redfall"
            />
            <ProjectCard
              name="Paper Samurai"
              imageUrl="/images/PaperSamurai.webp"
              websiteUrl="/work/paper-samurai"
            />
            <ProjectCard
              name="Transformers"
              imageUrl="/images/Transformers.webp"
              websiteUrl="www.google.com"
            />
          </div>
          <div className="audio-players">
            <AudioPlayer
              mname="Carnival"
              url="/music/Carnival.aac"
              cover="/music/music_1.webp"
            />
            <AudioPlayer
              mname="Bittersweet"
              url="/music/Bittersweet.wav"
              cover="/music/music_2.webp"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
