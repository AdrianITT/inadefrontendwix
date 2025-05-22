import React from "react";

import Carusel from "./Carusel/Carusel";
import Empresa from './Empresa/Empresa';
import AcercaNosotros from "./Nosotros/AcercaNosotros";
import LaboratorioAmbiental from "./LaboratorioAmbiental/LaboratorioAmbiental";
import IngenieriaAmbiental from "./IngenieriaAmbiental/IngenieriaAmbiental";
import Acreditaciones from "./Acreditacion/Acreditaciones";
import OurTeam from "./OurTeam/OurTeam";
import Contact from "./Contact/Contact";
import ButtonWhatsapp from "./Button/Buttonwhatsapp";
import Chatbot from "./Chatbot/ChatBot";

const Body = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
          <section id="inicio"><Carusel /></section>
               
               <section id="Empresa">
              <Empresa />
            </section>
            <section id="Laboratorio"><AcercaNosotros /></section>
            <section id="Laboratorio"><LaboratorioAmbiental /></section>
            <section id="Ingeniería"><IngenieriaAmbiental /></section>
            <section id="Acreditaciones"><Acreditaciones /></section>
            <section id="Equipo"><OurTeam /></section>
            <section id="Contacto"><Contact /></section>
            <ButtonWhatsapp />
            <Chatbot />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body;
// import React from "react";
// import { Carusel } from "./Carusel/Carusel";

