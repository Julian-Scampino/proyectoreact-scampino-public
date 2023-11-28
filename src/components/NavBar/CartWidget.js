import {FaCartPlus} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {useContext} from 'react'
import {contexto} from '../Context/CartContext'


const IconoCarrito = () => {
    const {cantidadDeItems} = useContext(contexto)

    return(<NavLink to='/Cart'>
        <div id="cartwidget" >
            <FaCartPlus/>
            {cantidadDeItems > 0 && <p style={{width: `${3}ch`, height: `${3}ch`}} id="nav-cart-textoCantItems">{cantidadDeItems < 99 ? cantidadDeItems : `99+`}</p>}
        </div>
        </NavLink>
    )

}

export default IconoCarrito