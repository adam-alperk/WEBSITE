import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link
import "../App.css";

const About = () => {
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
        <h1 id="heading">About</h1>
        <div className="about-section">
          <div className="about-intro">
            <div className="intro-text">
              <h2 className="about-subheading1">
                Welcome to My World of Sound and Code
              </h2>
              <p id="ind-p">
                Hello! I'm Aditya, a music producer, sound designer, and
                multifaceted digital creator. With a passion that sits at the
                crossroads of audio production and technology, I endeavor to
                expand the boundaries of the experiences and emotions that can
                be elicited within the listener.
              </p>
              <p className="about-para" id="ind-p">
                As a music producer and sound designer, my journey is all about
                exploring the limitless possibilities of sound. My work
                involves:
              </p>
            </div>
            <div className="about-image">
              <img src="/images/adigoj_about2.jpg" className="abt-img" />
            </div>
          </div>
          <br />
          <div className="about-grid">
            <div className="about-card">
              <h3>Composing and Producing</h3>
              <p>
                From the soothing harmonies of symphonic elegance to the
                pulsating cadences of electronic vibrance, I try to weave a
                diverse range of musical styles within my compositions. I thrive
                on crafting soundscapes that evoke unexplored emotions and
                resonate with audiences across various genres.
              </p>
            </div>
            <div className="about-card">
              <h3>Sound Design</h3>
              <p>
                Utilizing the latest techniques and tools, I sculpt sounds that
                breathe life into visual media. My specialty lies in creating
                immersive audio environments for video games, where every
                footstep, environmental ambience, and background score is
                meticulously designed to enhance the player's experience.
              </p>
            </div>
            <div className="about-card">
              <h3>Audio Implementation</h3>
              <p>
                Leveraging my programming background, I not only create but also
                integrate music and sound effects into games. My coding skills
                enable me to work closely with development teams, ensuring that
                audio elements perform seamlessly across gameplay scenarios.
              </p>
            </div>
          </div>
          <h2 className="about-subheading2">
            Beyond Sound: A Multidisciplinary Approach
          </h2>
          <p className="about-para" id="ind-p">
            My creative endeavors extend beyond the realm of audio:
          </p>
          <div className="about-grid">
            <div className="about-card">
              <h3>Software and Web Development</h3>
              <p>
                Fluent in multiple programming languages, I develop software and
                websites that stand at the intersection of functionality and
                aesthetics. My projects range from interactive web applications
                to custom software solutions, all built with a keen eye for
                detail and user experience.
              </p>
            </div>
            <div className="about-card">
              <h3>Networking and Linux Administration</h3>
              <p>
                With a solid foundation in networking and Linux administration,
                I ensure that the digital infrastructures supporting my projects
                are reliable, secure, and optimized for performance.
              </p>
            </div>
            <div className="about-card">
              <h3>3D Art and Animation</h3>
              <p>
                My artistic capabilities come to life through 3D art and
                animation. Whether it's modeling characters for a game or
                crafting animated sequences for multimedia projects, I employ a
                blend of artistic vision and technical proficiency to create
                visually stunning works.
              </p>
            </div>
          </div>
          <h2 className="about-subheading2">Let's Connect</h2>
          <p id="ind-p">
            Whether you're in need of an evocative soundtrack for your next
            game, a dynamic website for your business, or a captivating 3D
            animation, I'm here to bring your vision to life. Let's explore the
            possibilities together and create something extraordinary.
          </p>
          <br />
          <p className="about-para">Feel free to reach out ...</p>
          <div className="contact" id="abt-cnt">
            <a
              href="https://www.instagram.com/adigoj/"
              target="_blank"
              className="link"
            >
              <img src="/images/links/instagram.png" />
            </a>
            <a
              href="https://github.com/adam-alperk"
              target="_blank"
              className="link"
            >
              <img src="/images/links/github.png" />
            </a>
            <a
              href="https://www.linkedin.com/in/adigoj/"
              target="_blank"
              className="link"
            >
              <img src="/images/links/linkedin-logo.png" />
            </a>
            <a href="mailto:adam.alperk@gmail.com" className="link">
              <img src="/images/links/mail.png" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
