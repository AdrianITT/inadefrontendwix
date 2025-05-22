import React from "react";

const Maps = () => {
  return (
    <div className="container my-5 text-center">
      <iframe
        title="Ubicación en Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d683.2904929620514!2d-116.97229891344294!3d32.501655405348735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9380f4e88357d%3A0xb947ab268fdf9421!2sC.%20Tacubaya%204990%2C%20Guillen%2C%2022106%20Tijuana%2C%20B.C.!5e0!3m2!1ses-419!2smx!4v1747848278275!5m2!1ses-419!2smx"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Maps;
