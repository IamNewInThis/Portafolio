import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Tienda Tecnologia",
      description: "Venta & Control de stock de Tecnologia",
      imgUrl: projImg1,
      category: "web"
    },
    {
      id: 8,
      title: "Control de Inventario",
      description: "CRUD de Inventario",
      imgUrl: projImg1,
      category: "web"
    },
    //ERP
    {
      id: 2,
      title: "ToolHaus",
      description: "Control de Herramientas",
      imgUrl: projImg2,
      category: "erp"
    },
    {
      id: 9,
      title: "Servicios Bancos",
      description: "Integrar Servicios Security & BCI",
      imgUrl: projImg1,
      category: "erp"
    },
    {
      id: 10,
      title: "Billetera",
      description: "Billetera para asignar y gastar",
      imgUrl: projImg1,
      category: "erp"
    },

    //Mobile
    {
      id: 3,
      title: "Pet Cholito",
      description: "Busqueda & Adopcion de Mascotas",
      imgUrl: projImg3,
      category: "mobile"
    },
    {
      id: 4,
      title: "Marca de Asistencia",
      description: "Marca de Asistencia",
      imgUrl: projImg3,
      category: "mobile"
    },
    {
      id: 5,
      title: "AI Learning",
      description: "Proyecto de IA",
      imgUrl: projImg1,
      category: "ia"
    },
    {
      id: 6,
      title: "Software Management",
      description: "Gestión de Software",
      imgUrl: projImg2,
      category: "software"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Web Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">ERP Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Mobile Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">IA Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Software Projects</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
                {['web', 'erp', 'mobile', 'ia', 'software'].map((category, idx) => (
                  <Tab.Pane eventKey={['first', 'second', 'third', 'fourth', 'fifth'][idx]}>
                    <Row>
                      {projects.filter(project => project.category === category).map((project) => (
                        <ProjectCard key={project.id} {...project} />
                      ))}
                    </Row>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
