import React, { useContext } from 'react';
import { DataContext } from '../../Context/Dataprovider';

export const Carrito = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito, setCarrito] = value.carrito;

  const toggleCart = () => {
    setMenu(!menu);
  };

  const removeFromCart = (id) => {
    const updatedCart = carrito.filter((item) => item.id !== id);
    setCarrito(updatedCart);
  };

  const increaseQuantity = (id) => {
    const updatedCart = carrito.map((item) => {
      if (item.id === id) {
        return { ...item, cantidad: item.cantidad + 1 };
      }
      return item;
    });
    setCarrito(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = carrito.map((item) => {
      if (item.id === id && item.cantidad > 1) {
        return { ...item, cantidad: item.cantidad - 1 };
      }
      return item;
    });
    setCarrito(updatedCart);
  };

  const calculateTotal = () => {
    let total = 0;
    carrito.forEach((producto) => {
      total += producto.price * producto.cantidad;
    });
    return total;
  };

  const show1 = menu ? 'carritos show' : 'carritos';
  const show2 = menu ? 'carrito show' : 'carrito';

  return (
    <div className={show1}>
      <div className={show2}>
        <div className='carrito__close' onClick={toggleCart}>
          <box-icon name='x'></box-icon>
        </div>

        <h2>Su Carrito</h2>

        <div className='carrito__center'>
          {carrito.map((producto) => (
            <div className='carrito__item' key={producto.id}>
              <img src={producto.image} alt='' />
              <div className='texto'>
                 <h3>{producto.title}</h3> 
                <p className='price'>${producto.price}</p>
              </div>
              <div>
                <box-icon
                  name='up-arrow'
                  type='solid'
                  onClick={() => increaseQuantity(producto.id)}
                ></box-icon>
                <p className='cantidad'>{producto.cantidad}</p>
                <box-icon
                  name='down-arrow'
                  type='solid'
                  onClick={() => decreaseQuantity(producto.id)}
                ></box-icon>
              </div>
              <div className='remove__item' onClick={() => removeFromCart(producto.id)}>
                <box-icon name='trash'></box-icon>
              </div>
            </div>
          ))}
        </div>
        <div className='carrito__footer'>
          <h3>Total: ${calculateTotal()}</h3>
          <button className='btn'>Pagar</button>
        </div>
      </div>
    </div>
  );
};
