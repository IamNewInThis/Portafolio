import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ imgUrl, title, description, id }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/projects/${id}`);
  };

  return (
    <Col size={12} sm={6} md={4} onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;
