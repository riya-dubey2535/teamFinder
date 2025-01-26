import React, { useState } from 'react';
import '../index.css'; 

const ProjectListing = () => {
  const [projects, setProjects] = useState([
    { name: 'Hackathon 2025', description: 'Build the future of AI' },
    { name: 'WebDev Challenge', description: 'Create a full-stack app' },
  ]);
 
  return (
    <div>
      <h2>Available Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectListing;
