import React from 'react';
import '../assets/style/Carrusel.scss';

const Carrusel=({children})=>(
  <section className="Carrusel">
    <h3 className="carousel__title">MI LISTA</h3>
    <div className="carousel__container">
    {children}
      </div>
  </section>
);
export default Carrusel;
