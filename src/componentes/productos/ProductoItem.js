import React, { useContext } from 'react';
import { DataContext } from '../../Context/Dataprovider';
import { Link } from 'react-router-dom';


const ProductoItem = ({ id, title, price, image, category }) => {
  const { addCarrito } = useContext(DataContext);

  return (
    <div className='producto'>
      <Link to ={'/'}>
        <div className='producto__img'>
          <img src={image} alt={title} />
        </div>
      </Link>
      <div className='producto__footer'>
        <h1>{title}</h1>
        <p>{category}</p>
        <p className='price'>${price}</p>
      </div>
      <div className='buttom'>
        <button className='btn' onClick={() => addCarrito(id)}>Añadir al Carrito</button>
 
      </div>
    </div>
  );
};

export default ProductoItem;
