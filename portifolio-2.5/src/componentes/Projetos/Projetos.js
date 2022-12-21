import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjetosCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projetos/chatify.png";
import bitsOfCode from "../../Assets/Projetos/blog.png";

function Projetos() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        Meus Trabalhos <strong className="purple">Recentes </strong>
        </h1>
        <p style={{ color: "white" }}>
        Aqui estão alguns projetos em que trabalhei recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="História do Mascote do Android"
              description="Fala um pouco sobre a história do Android e seus nomes, 
              tecnologias utilizadas HTML e CSS."
              ghLink="https://github.com/felixskmarcio/projetos/tree/main/como-surgiu-o-mascote-do-android"
              demoLink="https://felixbr-portifolio-2.vercel.app/projetos/projetos.html#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Menu de navegação da barra lateral"
              description="Criado um menu de navegação da barra lateral, tecnologias utilizadas
              HTML, CSS e JS"
              ghLink="https://github.com/felixskmarcio/projetos/tree/main/sidebar-menu-1"
              demoLink="https://felixbr-portifolio-2.vercel.app/projetos/sidebar-menu-1/index.html"
            />
          </Col>
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title=" "
              description=" "
              ghLink=" "
              demoLink=" "              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title=" "
              description=" "
              ghLink=" "
              demoLink=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title=" "
              description=" "
              ghLink=" "
              demoLink=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title=" "
              description=" "
              ghLink=" "
              demoLink=" "    
            />
          </Col>  */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projetos;
