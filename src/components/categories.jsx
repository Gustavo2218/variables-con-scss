import React from 'react';
import '../assets/style/Categories.scss';

const Categories=({children})=>(
  <div className="categories">
  <h3 className="categories__title">AYUDA</h3>
  {children}
  </div>
);
export default Categories;
