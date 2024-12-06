import React from 'react';
import { useParams } from 'react-router-dom';
import exampleImage from '../assets/img/example.png';
import ecommerceVideo from '../assets/videos/ecommerce_admin.mp4'

const projectDetails = {
  1:{
    title: "Ecommerce Next",
    description: "Una tienda web desarrollada con Next.js, MongoDB y S3, con autenticación Google y administración de bodega para productos, categorías y marcas.",
    videoUrl: ecommerceVideo,
    technologies: ["Next.js", "MongoDB", "AWS S3", "Google Auth"],
    links: {
      github: "https://github.com/usuario/ecommerce-next",
    },
  },  
  2: {
    title: "Proyecto Odoo ToolHaus",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere felis orci, tristique iaculis metus laoreet dapibus. Integer sem ex, mattis at risus vel, tincidunt viverra augue. Integer justo lacus, commodo lacinia dolor sed, sagittis auctor quam. Pellentesque aliquet mollis neque non gravida. Duis sollicitudin libero in neque dignissim, quis auctor ante consectetur. Ut eget mattis est. Pellentesque suscipit pulvinar maximus. Mauris eu augue faucibus, gravida nulla vel, luctus nibh. Etiam sodales magna lacus, vitae tempor velit varius posuere. Aliquam vitae lacinia nunc. Fusce in odio tortor. Sed ac suscipit ipsum, in imperdiet metus. Nullam rutrum nisl a elementum ultricies. Vestibulum id tincidunt purus. Aliquam at dolor mauris. Praesent posuere ultrices felis fermentum ullamcorper.",
    imgUrl: exampleImage,
  },
  3:{
    title: "Pet Cholito",
  },
  4:{
    title: "Marca de Asistencia",
  }
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
        
        {project.videoUrl ? (
          <video
            src={project.videoUrl}
            controls
            className="project-video"
            alt={project.title}
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={project.imgUrl}
            alt={project.title}
            className="project-image"
          />
        )}
      </div>
      <div className="project-description-card">
        <p>{project.description}</p>
      </div>

      <div className="project-technologies">
        <h3>Tecnologías utilizadas:</h3>
        <ul>
          {project.technologies && project.technologies.map((tech, index) => (
            <li key={index} className="tech-item">{tech}</li>
          ))}
        </ul>
      </div>

      <div className="project-links">
        <h3>Enlaces:</h3>
        {project.links && (
          <ul>
            {project.links.github && (
              <li>
                <a href={project.links.github} target="_blank" rel="noreferrer">
                  Ver en GitHub
                </a>
              </li>
            )}
            {project.links.demo && (
              <li>
                <a href={project.links.demo} target="_blank" rel="noreferrer">
                  Ver Demo
                </a>
              </li>
            )}
          </ul>
        )}
      </div>


    </div>
  );
};

export default ProjectDetail;
