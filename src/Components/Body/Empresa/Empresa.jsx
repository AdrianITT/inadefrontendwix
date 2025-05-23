import React from "react";

const Empresa = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold text-primary">Bienvenidos a INADE</h2>
        <p className="lead">Empresa INADE</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <p className="card-text">
                El mercado actual exige empresas de alta calidad, orientadas al trabajo colaborativo para alcanzar resultados óptimos. En <strong>INADE</strong>,
                respondemos a estas exigencias mediante la implementación de un sistema de gestión de calidad basado en la norma <strong>NMX-EC-17025-IMNC-2018</strong>.
              </p>
              <p className="card-text">
                Con presencia estratégica en <strong>Tijuana, Mexicali, Monterrey, Veracruz</strong> y <strong>Los Cabos</strong>, conformamos equipos de trabajo
                en conjunto con nuestros clientes, enfocándonos en el logro de objetivos comunes y en la excelencia de los servicios que ofrecemos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empresa;
