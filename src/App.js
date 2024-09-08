import React from "react";
//import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FontAwesomeIcon icon={faInstagram} />
        <h1 class="nameID">Nádia Dias</h1>
        <p>Front-end Developer</p>
      </header>
      <section>
        <h2>Experiência</h2>
        <p>Desenvolvedor Front-End na Empresa X</p>
      </section>
      <section>
        <h2>Educação</h2>
        <p>Bacharelado em Ciência da Computação, Universidade Y</p>
      </section>
    </div>
  );
}

export default App;
