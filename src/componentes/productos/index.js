import React, { useState, useContext } from 'react';
import { DataContext } from '../../Context/Dataprovider';
import ProductoItem from './ProductoItem';

const ProductosLista = () => {
  const value = useContext(DataContext);
  const productos = value.productos;

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtrar los productos según el término de búsqueda
  const filteredProductos = productos.filter((producto) =>
    producto.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1 className='title'>PRODUCTOS</h1>
      <div className=''>
        <input
          type='text'
          placeholder='Buscar productos...'
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className='productos'>
        {filteredProductos.map((producto) => (
          <ProductoItem
            key={producto.id}
            id={producto.id}
            title={producto.title}
            price={producto.price}
            image={producto.image}
            category={producto.category}
          />
        ))}
      </div>
    </>
  );
};

export default ProductosLista;
