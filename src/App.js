import React from 'react';
import { Header } from './componentes/Header';
import ProductosLista from './componentes/productos';
import 'boxicons';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './componentes/Inicio';
import { DataProvider } from './Context/Dataprovider';
import { Carrito } from './componentes/Carrito';
import SobreNosotros from './componentes/SobreNosotros';
import PaginaInexistente from './componentes/paginainexistente';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<ProductosLista />} />
            <Route path="/sobrenosotros" element={<SobreNosotros />} />
            <Route path='*' element={<PaginaInexistente />} />
           </Routes>
        </Router>
        <Carrito />
      </div>
    </DataProvider>
  );
}

export default App;
