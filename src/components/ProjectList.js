import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList(props) {
 
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        <ul>
        {props.projects.map(project =>
          <ProjectItem name={project.name} about={project.about}technologies={project.technologies} id={project.id} key={project.id}/>)}
          </ul>
           </div>
    </div>
  );
}

export default ProjectList;
