import React, { useState, useEffect } from "react";
import Preloader from "../src/componentes/Pre";
import Navbar from "./componentes/Navbar";
import Início from "./componentes/Início/Início";
import Sobre from "./componentes/Sobre/Sobre";
import Projetos from "./componentes/Projetos/Projetos";
import Footer from "./componentes/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./componentes/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Início />} />
          <Route path="/project" element={<Projetos />} />
          <Route path="/about" element={<Sobre />} />          
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
