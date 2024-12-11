import React from 'react';
import { useParams } from 'react-router-dom';
import exampleImage from '../assets/img/example.png';
import ecommerceVideo from '../assets/videos/ecommerce_admin.mp4'
import reduxVideo from '../assets/videos/redux.mp4'
import task_manager from '../assets/videos/task_manager.mp4'

const projectDetails = {
  1:{
    title: "Ecommerce Next",
    description: "Una tienda web desarrollada con Next.js, MongoDB y S3, con autenticación Google y administración de bodega para productos, categorías y marcas.",
    videoUrl: ecommerceVideo,
    technologies: [
      { name: "Next.js", imageUrl: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
      { name: "MongoDB", imageUrl: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
      { name: "AWS S3", imageUrl: "data:image/jpeg;base64,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" },
    ],
    links: {
      github: "https://github.com/IamNewInThis/Ecommerce-Next-Cliente",
    },
  },  
  2: {
    title: "CRUD con Redux",
    description: "Este proyecto es un CRUD de gestión de tareas, utilizando Redux como gestor de estado. La aplicación usuarios agregar tareas, editarlas o eliminarlas.",
    videoUrl: reduxVideo,
    technologies: [
      { name: "React", imageUrl: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
      { name: "Redux", imageUrl: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" },
    ],
    links: {
      github: "https://github.com/IamNewInThis/react-redux-task",
    },
  },
  3:{
    title: "Login con Angular y Supabase",
    description: "Task Manager es una aplicación desarrollada con Angular y Supabase para organizar y gestionar tareas de manera eficiente. Actualmente, cuenta con una funcionalidad de inicio de sesión totalmente operativa, que permite a los usuarios autenticarse de forma segura utilizando Supabase como backend y Angular para la interfaz de usuario",
    videoUrl: task_manager,
    technologies: [
      { name: "Angular", imageUrl: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg" },
      { name: "Supabase", imageUrl: "https://styles.redditmedia.com/t5_47da3l/styles/communityIcon_8wbqkp0rozjd1.jpg?format=pjpg&s=70862eec9c29aa0c25f2a6b9e708698dd03474e5" },
    ],
    links: {
      github: "https://github.com/IamNewInThis/task_manager",
    },
  },
  4:{
    title: "ToolHaus",
    technologies: [
      { name: "Python", imageUrl: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
      { name: "XML", imageUrl: "https://cdn.worldvectorlogo.com/logos/xml-2.svg" },
      { name: "Odoo", imageUrl: "https://cdn.worldvectorlogo.com/logos/odoo.svg" },
    ],
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

        <div className="project-links">
          <h3>Enlaces:</h3>
          {project.links && (
            <ul>
              {project.links.github && (
                <li>
                  <a href={project.links.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>

      <div className="project-detail-right">
        <div className="project-description-card">
          <p>{project.description}</p>
        </div>

        <div className="technologies-card">
          <h3>Tecnologías utilizadas:</h3>
          <ul className="technologies-list">
          {project.technologies &&
            project.technologies.map((tech, index) => (
              <li key={index} className="technology-item">
                <img src={tech.imageUrl} alt={tech.name} className="technology-icon" />
                <span>{tech.name}</span>
              </li>
            ))}
        </ul>
        </div>
      </div>
      
    </div>
  );
};

export default ProjectDetail;
