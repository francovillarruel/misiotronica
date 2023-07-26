import LOGO from "../../imagenes/LOGO.png"
import React from 'react'
import {Link} from 'react-router-dom'
import { DataContext } from "../../Context/Dataprovider"
import { useContext } from "react"
 
export const Header = () => {
    const value= useContext(DataContext);
    const [menu,setMenu] = value.menu;
    const [carrito]= value.carrito;
 
    const toogleMenu = () =>{
        setMenu(!menu)
    }
 

    return (
   <header>
    <Link to='/'>
        <div className='logo'>
            <img src={LOGO} alt="" height="120" />
        </div>
    </Link>
    <ul>
        <li>
            <Link to="/">INICIO</Link>
        </li>
        <li>
            <Link to="productos">PRODUCTOS</Link>
        </li>
        <li>
            <Link to="sobrenosotros">SOBRE NOSOTROS</Link>
        </li>
        <li>
            <Link to="contacto">CONTACTO</Link>
        </li>
        
    </ul>
    <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item__total">{carrito.length}</span>
    </div>
   </header>
  )
}


 
