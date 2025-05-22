import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Acreditaciones = () => {
  return (
    <div className=" py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-3">ACREDITACIONES</h2>
        <div className="border-bottom border-white mx-auto mb-4" style={{ width: "60px", height: "4px" }}></div>
        <p className="mx-auto" style={{ maxWidth: "800px" }}>
          INADE, cuenta con Registro como Laboratorio Ambiental aprobado por la Secretaría de Protección al Ambiente
          del Estado de Baja California (SPA), con registros como Peritos en Monitoreo y recientemente ACREDITADOS por
          la Entidad Mexicana de Acreditación, A.C. en las ramas de:
        </p>

        {/* Tarjetas de acreditaciones */}
        <div className="row mt-5 g-4">
          <div className="col-md-4">
            <h5 className="mb-3">AMBIENTE LABORAL</h5>
            <img
              src="/amb-lab_med.png"
              alt="Ambiente Laboral"
              className="img-fluid shadow rounded"
            />
          </div>

          <div className="col-md-4">
            <h5 className="mb-3">AGUA</h5>
            <img
              src="/aguas-inade_med-2.jpeg"
              alt="Agua"
              className="img-fluid shadow rounded"
            />
          </div>

          <div className="col-md-4">
            <h5 className="mb-3">FUENTES FIJAS</h5>
            <img
              src="/fuentes-fijas-inade_med-2.jpeg"
              alt="Fuentes Fijas"
              className="img-fluid shadow rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acreditaciones;
