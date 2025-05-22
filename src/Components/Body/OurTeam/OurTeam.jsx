import React from "react";

const OurTeam = () => {
  return (
    <div className="container my-5">
      {/* Título principal */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">NUESTRO EQUIPO</h1>
        <p>
          En Ingeniería y Administración Estratégica conformamos un equipo para atender sus necesidades de seguridad e higiene, medio ambiente, gestión y requerimientos de cumplimiento normativo.
        </p>
      </div>

      {/* Sección de empleo */}
      <div className="text-center mb-5">
        <h2 className="fw-bold text-success">OPORTUNIDADES DE EMPLEO</h2>
        <p>
          Estamos siempre en busca de personas con visión de trabajo para integrarlas a nuestro equipo. Si estás interesado en las siguientes vacantes:
        </p>
      </div>

      {/* Tarjetas con imágenes */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* Ingeniero de Calidad */}
        <div className="col">
          <div className="card h-100 shadow-sm border-0">
            <img
              src="/Cakidad.jpeg"
              className="card-img-top"
              alt="Ingeniero de Calidad"
              style={{
                width: "100%",
                height: "50%",
                minHeight: "200px",
                objectFit: "cover",
              }}
            />
            <div className="card-body">
              <h5 className="card-title text-primary fw-bold">Ingeniero de Calidad</h5>
              <p className="card-text">
                Obtener energía y compartir estándares de calidad. Participar en procesos de mejora continua y aseguramiento.
              </p>
            </div>
          </div>
        </div>

        {/* Mientras */}
        <div className="col">
          <div className="card h-100 shadow-sm border-0">
            <img
              src="/Muestreo.jpeg"
              className="card-img-top"
              alt="Mientras"
              style={{
                width: "100%",
                height: "50%",
                minHeight: "300px",
                objectFit: "cover",
              }}
            />
            <div className="card-body">
              <h5 className="card-title text-primary fw-bold">Muestreo</h5>
              <p className="card-text">
                Apoyo general en procesos de monitoreo ambiental y seguridad. Disponibilidad para rotación de turnos.
              </p>
            </div>
          </div>
        </div>

        {/* Administración */}
        <div className="col">
          <div className="card h-100 shadow-sm border-0">
            <img
              src="/Licenciatura-en-Administración-de-Recursos-Humanos.jpg"
              className="card-img-top"
              alt="Administración"
              style={{
                width: "100%",
                height: "50%",
                minHeight: "300px",
                objectFit: "cover",
              }}
            />
            <div className="card-body">
              <h5 className="card-title text-primary fw-bold">Administración</h5>
              <p className="card-text">
                Gestión documental, coordinación con clientes, control de presupuestos y soporte a proyectos internos.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mensaje final */}
      <div className="mt-5">
        <p>
          Si estas oportunidades coinciden con tu perfil, no dudes en postularte. Valoramos personas que sumen a nuestras especialidades y fomenten un ambiente de trabajo eficaz, profesional y comprometido.
          <strong> oficina@inade.mx, inade@inade.mx</strong></p>
      </div>
    </div>
  );
};

export default OurTeam;
