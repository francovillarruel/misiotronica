import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../Context/Dataprovider';
import LOGO from '../../imagenes/LOGO.png';

export const Header = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito] = value.carrito;

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={`sidebar ${showMenu ? 'active' : ''}`}>
      {/* Aquí está el botón del menú hamburguesa */}
      <div className='hamburger-menu' onClick={toggleMenu}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>

      <Link to="/">
        <div className='logo'>
          <img src={LOGO} alt='' height='120' />
        </div>
      </Link>

      {/* El menú lateral */}
      <div className={`hambuger-menu-links ${showMenu ? 'showMenu' : ''}`}>
        <div className='links'>
          <ul>
            <li>
              <Link to="/">INICIO</Link>
            </li>
            <li>
              <Link to="productos">VENTA</Link>
            </li>
            <li>
              <Link to="sobrenosotros">SOBRE NOSOTROS</Link>
            </li>
            <li>
              <Link to="contacto">CONTACTO</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='cart' onClick={() => setMenu(!menu)}>
        <box-icon name='cart'></box-icon>
        <span className='item__total'>{carrito.length}</span>
      </div>
    </header>
  );
};
