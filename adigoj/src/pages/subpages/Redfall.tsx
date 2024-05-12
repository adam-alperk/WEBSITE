// Redfall Project Page
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link
import YouTube from "react-youtube";
import "../../App.css";
import "./ProjectPages.css";

const Redfall = () => {
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
          <h1 id="heading">Redfall</h1>
          <h2 id="subheading">Re-Sound Design of Redfall Game Trailer</h2>
          <YouTube
            videoId="u-p2DD1Ki7o"
            opts={videoOptions}
            className="youtube-container"
          />
          <div className="project-details">
            <h2>
              Final linear media sound design project for Vancouver Film School.
              This was an individual project in which we were tasked with
              complete re-sound designing of a linear media clip of up to 3 and
              a half minutes.
            </h2>
            <div id="spacer-large" />
            <div className="details-section">
              <h2>Credits:</h2>
              <h3>ADR</h3>
              <ul>
                <li>Layla - Srishti Gojamgunde</li>
                <li>Jacob - Ishaan Trivedi</li>
                <li>Dev - Aditya Gojamgunde</li>
                <li>Remi - Maria Fernanda Altamirano Velazquez</li>
                <li>Vampire 1 - Maria Fernanda Altamirano Velazquez</li>
                <li>Vampire 2 - Aditya Gojamgunde</li>
              </ul>
              <ul>
                <li>
                  Recording Engineers - Aditya Gojamgunde, Maria Fernanda
                  Altamirano Velazquez
                </li>
              </ul>
              <h3>Foley</h3>
              <ul>
                <li>
                  Artists - Aditya Gojamgunde, Maria Fernanda Altamirano
                  Velazquez
                </li>
                <li>
                  Recording Engineers - Aditya Gojamgunde, Maria Fernanda
                  Altamirano Velazquez
                </li>
              </ul>
              <h3>Sound Design, Editing and Mixing</h3>
              <ul>
                <li>Aditya Gojamgunde</li>
              </ul>
            </div>
            <div id="spacer-large" />
            <div className="details-section">
              <h2>Project</h2>
              <p>
                The final mix was created for 5.1 and then mixed down to LTRT
                and LoRo. The above video has LoRo mix.
              </p>
              <img className="details-image" src="/projects/redfall/full.png" />
              <div id="spacer-large" />
              <img
                className="details-image"
                src="/projects/redfall/5_1_mix.png"
              />
            </div>
            <div id="spacer-large" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Redfall;
