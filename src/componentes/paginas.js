import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Inicio from './Inicio';
import ProductosLista from './productos';
import SobreNosotros from './SobreNosotros';

const Paginas = () => {
  return (
    <section>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<ProductosLista />} />
          <Route path="/sobrenosotros" element={<SobreNosotros/>} />
        </Routes>
      </Router>
    </section>
  );
}
export default Paginas;