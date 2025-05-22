import React from "react";
import './Buttonwa.css';

const ButtonWhatsapp = () => {
  return (
    <button
      className="custom-button"
      onClick={() =>
        window.open("https://api.whatsapp.com/send/?phone=526641236719&text=Gracias+por+comunicarse+con+nosotros%2C+en+que+podemos+ayudarle%3F&type=phone_number&app_absent=0", "_blank") // ← reemplaza con tu número
      }
    >
      ¿Preguntas? Te atendemos por WhatsApp
    </button>
  );
};

export default ButtonWhatsapp;
