import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Olá a todos, eu sou <span className="purple">Marcio Felix </span>
            de <span className="purple"> Alagoas, Brasil.</span>
            <br />m desenvolvedor Front-End Designer, formado em Analista de 
            Desenvolvimento de Sistema que procura ser melhor do que no dia 
            anterior, ter crescimento contínuo e causar impacto na vida das 
            pessoas. Estou estudando Bacharelado em Sistemas de Informação 
            pela Universidade Federal de Alagoas - UFAL.
            <br />
            <br />
            Além da codificação, algumas outras atividades que adoro fazer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Aprender novas tecnologias
            </li>
            <li className="about-activity">
              <ImPointRight /> Desenvolver
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Esforce-se para construir coisas que fazem a diferença!"{" "}
          </p>
          <footer className="blockquote-footer">FelixBR</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
