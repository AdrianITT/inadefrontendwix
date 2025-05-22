import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const LaboratorioAmbiental = () => {
  const [activeKey, setActiveKey] = useState(null);

  const toggleCollapse = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold text-primary">LABORATORIO AMBIENTAL</h2>
        <p className="text-muted">Servicios especializados de análisis ambiental</p>
      </div>

      <div className="accordion" id="accordionExample">

        {/* Sección 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className={`accordion-button ${activeKey !== 1 ? "collapsed" : ""}`}
              type="button"
              onClick={() => toggleCollapse(1)}
              aria-expanded={activeKey === 1}
              aria-controls="collapseOne"
            >
              MUESTREO Y ANÁLISIS DE AGUAS
            </button>
          </h2>
          <div
            id="collapseOne"
            className={`accordion-collapse collapse ${activeKey === 1 ? "show" : ""}`}
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul>
                <li>Residuales</li>
                <li>Potables</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sección 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className={`accordion-button ${activeKey !== 2 ? "collapsed" : ""}`}
              type="button"
              onClick={() => toggleCollapse(2)}
              aria-expanded={activeKey === 2}
              aria-controls="collapseTwo"
            >
              FUENTES FIJAS
            </button>
          </h2>
          <div
            id="collapseTwo"
            className={`accordion-collapse collapse ${activeKey === 2 ? "show" : ""}`}
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul>
                <li>Humedad en ductos</li>
                <li>Gases de combustión</li>
                <li>Partículas suspendidas totales perimetrales</li>
                <li>PM10 perimetrales</li>
                <li>Óxidos de nitrógeno</li>
                <li>SO₂, SO₃ y neblinas ácidas/alcalinas</li>
                <li>Compuestos orgánicos volátiles</li>
                <li>Ruido de fuentes fijas</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sección 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className={`accordion-button ${activeKey !== 3 ? "collapsed" : ""}`}
              type="button"
              onClick={() => toggleCollapse(3)}
              aria-expanded={activeKey === 3}
              aria-controls="collapseThree"
            >
              LABORAL
            </button>
          </h2>
          <div
            id="collapseThree"
            className={`accordion-collapse collapse ${activeKey === 3 ? "show" : ""}`}
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul>
                <li>Ruido laboral</li>
                <li>Temperaturas extremas y abatidas</li>
                <li>Sustancias químicas</li>
                <li>Iluminación</li>
                <li>Resistencia de tierras físicas y continuidad</li>
                <li>Vibraciones</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sección 4 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className={`accordion-button ${activeKey !== 4 ? "collapsed" : ""}`}
              type="button"
              onClick={() => toggleCollapse(4)}
              aria-expanded={activeKey === 4}
              aria-controls="collapseFour"
            >
              OTROS
            </button>
          </h2>
          <div
            id="collapseFour"
            className={`accordion-collapse collapse ${activeKey === 4 ? "show" : ""}`}
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul>
                <li>Hidrocarburos totales rango diésel (fracción media)</li>
                <li>Hidrocarburos totales rango gasolina (fracción ligera)</li>
                <li>Hidrocarburos totales rango aceite (fracción pesada)</li>
                <li>Análisis CRIT</li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LaboratorioAmbiental;
