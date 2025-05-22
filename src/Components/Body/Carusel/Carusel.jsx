import React from "react";

const Carusel = () => {
  return (
<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
      <img src="/slide1-inade.jpg" className="d-block w-100" alt="INGENIEROS"
      style={{ objectFit: "cover", maxHeight: "450px" }}/>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="nosotros-inade-laboratorio-ambiental-2.jpg" className="d-block w-100" alt="EQUPO"
      style={{ objectFit: "cover", maxHeight: "450px" }}/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="/team.png" className="d-block w-100" alt="TRABAJO"
      style={{ objectFit: "cover", maxHeight: "450px" }}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  );
}

export default Carusel;