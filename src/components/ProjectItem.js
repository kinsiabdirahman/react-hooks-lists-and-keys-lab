import React from "react";

function ProjectItem({ project }) {
  if (!project) {
    return null; // or handle this case accordingly
  }

  const { name, about, technologies } = project;

  return (
    <div className="project-item">
      <h2>{name}</h2>
      <p>{about}</p>
      <div className="technologies">
        <h3>Technologies</h3>
        {technologies ? (
          technologies.map((tech) => <span key={tech}>{tech}</span>)
        ) : (
          <span>No technologies provided</span>
        )}
      </div>
    </div>
  );
}

export default ProjectItem;
