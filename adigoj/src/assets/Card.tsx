import "./Card.css";

const ProjectCard = ({ name, imageUrl, websiteUrl }) => {
  const handleClick = () => {
    window.open(websiteUrl, "_blank"); // Opens the project website in a new tab
  };

  return (
    <div
      className="project-card"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <img
        src={imageUrl}
        alt={name}
        // style={{ width: "100%", height: "auto" }}
      />
      <div className="project-name">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
