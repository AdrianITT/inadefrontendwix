import React, { useState } from "react";
import Maps from "./Maps/Maps";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    await fetch("https://formsubmit.co/calidad@inade.mx", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    setSuccess(true);
    form.reset();
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <Maps />
          <h1 className="text-center mb-4">CONTACTO</h1>

          <div className="row">
            <div className="col-md-6 mb-4">
              <h3>Preguntas</h3>
              <p>
              Para todo tipo de preguntas, comentarios e inquietudes; por favor llámanos, completa el formulario a continuación
              </p>

              <h3 className="mt-4">Cotizaciones:</h3>
              <p className="h4">(663) 323 2910</p>

              <h3 className="mt-4">QUEJAS Y SUGERENCIAS</h3>

              {success && (
                <div className="alert alert-success">
                  ¡Gracias por contactarnos! Te responderemos pronto.
                </div>
              )}

              {/* Formulario */}
              <form onSubmit={handleSubmit} className="mt-4">
                <input type="hidden" name="_captcha" value="false" />

                <div className="mb-3">
                  <label>Nombre:</label>
                  <input type="text" name="nombre" className="form-control" required />
                </div>

                <div className="mb-3">
                  <label>Apellido:</label>
                  <input type="text" name="apellido" className="form-control" />
                </div>

                <div className="mb-3">
                  <label>Correo Electrónico:</label>
                  <input type="email" name="correo" className="form-control" required />
                </div>

                <div className="mb-3">
                  <label>Teléfono:</label>
                  <input type="tel" name="telefono" className="form-control" />
                </div>

                <div className="mb-3">
                  <label>Deja tu mensaje:</label>
                  <textarea name="mensaje" className="form-control" rows="4"></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </form>
            </div>

            <div className="col-md-6 mb-4">
              
              <h3>Oficina Principal</h3>
              <p>(664) 104 5144</p>

  
              <h3>Empleos</h3>
              <p>
              Para aplicar a un trabajo en INADE, envía tu CV y carta de recomendación a: hlarreta@inade.mx
              </p>

              <h3 className="mt-4">Para atención de quejas, sugerencias, felicitaciones y comentarios relacionado a:</h3>
              <p className="h5">calidad@inade.mx</p>
              <p className="h5">hlarreta@me.com</p>
              <a href="https://www.facebook.com/people/Inade-MX/pfbid02o12EcMN4SW1eyP9F2M3XKaqWtrRG29A1jaLJRgQPug6XRBquWqt5evPZQsDJkdKGl/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook fa-2x text-primary"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
