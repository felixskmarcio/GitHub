import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import InícioLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Início2 from "./Início2";
import Type from "./Type";

function Início() {
  return (
    <section>
      <Container fluid className="home-section" id="Início">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Olá!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Eu sou
                <strong className="main-name"> FelixBR</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={InícioLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Início2 />
    </section>
  );
}

export default Início;
