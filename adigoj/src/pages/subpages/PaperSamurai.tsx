// Paper Samurai Project Page
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link
import YouTube from "react-youtube";
import "../../App.css";
import "./ProjectPages.css";

const PaperSamurai = () => {
  const videoOptions = {
    height: "487.5", // default 390
    width: "800", // defualt 640
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
          <h1 id="heading">Paper Samurai</h1>
          <h2 id="subheading">Re-Sound Design of Paper Samurai Game</h2>
          <YouTube
            videoId="LzFCTgei-MQ"
            opts={videoOptions}
            className="youtubeContainer"
          />
          <div className="project-details">
            <h2>
              Our final term project at Vancouver Film School centered on
              interactive sound design and implementation. As a team of three,
              we created and integrated sound assets into a video game developed
              by fellow students. Our responsibilities included mixing, ambient
              effects, and troubleshooting, with regular milestones prompting
              presentations of our progress and challenges. This project
              mirrored the demands of AAA gaming companies, emphasizing
              precision and problem-solving.
            </h2>
            <div id="spacer-large" />
            <h2>
              Paper Samurai is a hack and slash isometric 3D game, where the
              player controls a deadly and swift samurai made from washi paper.
              Throughout the game they must escape from the Great Demon, while
              killing its evil servants. To complete the game the player must
              find three ofuda seals scattered around that will power their
              sword allowing them to vanquish this great evil.
            </h2>
            <div id="spacer-large" />
            <div className="details-section">
              <h2>Audio Team</h2>
              <ul>
                <li>Aditya Gojamgunde</li>
                <li>Ben Sousae</li>
                <li>Shashwat</li>
              </ul>
            </div>
            <div id="spacer-large" />
            <div className="details-section">
              <h2>Game Flow</h2>
              <img
                src="/projects/paper-samurai/Flow_Chart.webp"
                className="details-image"
              />
            </div>
            <div id="spacer-large" />
            <div className="details-section">
              <h2>Interactive Music</h2>
              <p>
                Composed with Traditional Japanese and orchestral instruments
                with multiple variations for each section of the game. Intensity
                of the music increases as the game progresses and gets more
                difficult.
              </p>
              <img
                src="/projects/paper-samurai/MX_2.png"
                className="details-image"
              />
              <div id="spacer-large" />
              <img
                src="/projects/paper-samurai/MX_1.png"
                className="details-image"
              />
              <div id="spacer-large" />
              <div className="details-grid">
                <img
                  src="/projects/paper-samurai/MX_3.png"
                  className="details-image"
                />
                <p className="details-grid-p">
                  All compositions were composed in Ableton Live, mixed in Pro
                  Tools, and implemented in Wwise with further side-chaining,
                  randomization and sequencing.
                </p>
              </div>
            </div>
            <div id="spacer-large" />
            <div className="details-section">
              <h2>Main Menu</h2>
              <p>
                Every time the user hovers over a menu item with the cursor, a
                random koto note is played. This creates a new melody every
                time. I used the Japanese scale, Yo to achieve this effect. Yo
                was the perfect scale for this as it is a major pentatonic scale
                which starts on the 5th degree, which gives the sense of it
                having two tonal centers. So random notes played in this scale
                always sound melodious.
              </p>
              <div id="spacer-large" />
              <div id="reverse-column" className="details-grid">
                <img
                  src="/projects/paper-samurai/MX_Menu.png"
                  className="details-image"
                />
                <p className="details-grid-p">
                  Individual notes of the Yo scale were recorded in two octaves
                  on a Koto software instrument. Each note was recorded with
                  multiple velocities (loudness). Overall 163 Koto notes were
                  recorded and randomized. The intention was to engage the
                  players on the main menu screen so they can have fun making
                  new melodies.
                </p>
              </div>
            </div>
            <div id="spacer-large" />
            <div id="spacer-large" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PaperSamurai;
