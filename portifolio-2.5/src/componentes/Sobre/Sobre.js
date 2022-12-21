import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Sobrecard from "./SobreCard";
import Toolstack from "./Toolstack";

function Sobre() {
  return (
    <Container fluid className="Sobre-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Quem  <strong className="purple">EU SOU</strong>
            </h1>
            <Sobrecard />
          </Col>
        </Row>
        <h1 className="project-heading">
          Minhas <strong className="purple">Skill</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Ferramentas</strong> que eu uso
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default Sobre;
