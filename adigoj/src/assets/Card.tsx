import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./Card.css";

const ProjectCard = ({ name, imageUrl, websiteUrl }) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleClick = () => {
    navigate(websiteUrl); // Use navigate to change the path
  };

  return (
    <div
      className="project-card"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <img src={imageUrl} alt={name} />
      <div className="project-name">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
