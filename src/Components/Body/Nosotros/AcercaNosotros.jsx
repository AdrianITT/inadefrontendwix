import React from "react";

const AcercaNosotros = () => {
  return (
    <div className="container py-5" id="Empresa">
      <div className="row align-items-center g-5">
        {/* Imagen */}
        <div className="col-md-5 text-center">
          <div className="p-3 border rounded-4 shadow-sm bg-white">
            <img
              src="/nosotros-inade-laboratorio-ambiental-1.jpg"
              alt="INADE"
              className="img-fluid rounded-3"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Texto */}
        <div className="col-md-7">
            <h2 className="fw-bold text-primary mb-4">Acerca de Nosotros</h2>

          <p className="text-justify">
            <strong>INGENIERÍA Y ADMINISTRACIÓN ESTRATÉGICA, S.A. DE C.V. (INADE LAB)</strong> es una empresa de servicios de ingeniería ambiental con sede en Tijuana, 
            operando proyectos a lo largo de la República Mexicana.
          </p>
          <p className="text-justify">
            Nos enfocamos en proyectos ambientales e ingenieriles, cumpliendo con los requerimientos de nuestros clientes para formar parte de su cadena productiva.
            INADE está registrado como Laboratorio Ambiental aprobado por la Secretaría de Protección al Ambiente del Estado de Baja California (SPA).
          </p>
          <p className="text-justify">
            Contamos con registros como peritos en monitoreo y mantenemos la calidad bajo los requisitos de la <strong>NMX-17025</strong>, acreditados por la Entidad Mexicana de Acreditación, A.C.
          </p>
          <p className="fw-bold text-success fs-5">¡Comunícate con nosotros!</p>
        </div>
      </div>
    </div>
  );
};

export default AcercaNosotros;
