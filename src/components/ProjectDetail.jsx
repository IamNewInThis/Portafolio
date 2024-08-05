import React from 'react';
import { useParams } from 'react-router-dom';
import exampleImage from '../assets/img/example.png';

const projectDetails = {
  1: {
    title: "Proyecto Odoo ToolHaus",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere felis orci, tristique iaculis metus laoreet dapibus. Integer sem ex, mattis at risus vel, tincidunt viverra augue. Integer justo lacus, commodo lacinia dolor sed, sagittis auctor quam. Pellentesque aliquet mollis neque non gravida. Duis sollicitudin libero in neque dignissim, quis auctor ante consectetur. Ut eget mattis est. Pellentesque suscipit pulvinar maximus. Mauris eu augue faucibus, gravida nulla vel, luctus nibh. Etiam sodales magna lacus, vitae tempor velit varius posuere. Aliquam vitae lacinia nunc. Fusce in odio tortor. Sed ac suscipit ipsum, in imperdiet metus. Nullam rutrum nisl a elementum ultricies. Vestibulum id tincidunt purus. Aliquam at dolor mauris. Praesent posuere ultrices felis fermentum ullamcorper.",
    imgUrl: exampleImage,
  },
  // otros proyectos...
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectDetails[projectId];

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div className="project-detail-container">
      <div className="project-detail-left">
        <div className="project-detail-card">
          <div className="project-content">
            <h1>{project.title}</h1>
          </div>
        </div>
        <img src={project.imgUrl} alt={project.title} className="project-image"/>
      </div>
      <div className="project-description-card">
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectDetail;
