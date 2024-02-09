import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./Card.css";

// Define an interface for the component props
interface ProjectCardProps {
  name: string;
  imageUrl: string;
  websiteUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  imageUrl,
  websiteUrl,
}) => {
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
