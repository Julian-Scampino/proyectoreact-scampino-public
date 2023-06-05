import {FaCartPlus} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {useContext} from 'react'
import {contexto} from '../Context/CartContext'


const IconoCarrito = () => {
    const {cantidadDeItems} = useContext(contexto)
    return(<NavLink to='/Cart'>
        <div id="cartwidget" style={{display: "flex", paddingRight: '14px'}}>
            <FaCartPlus style={{fontSize: '30px'}}/>
            {cantidadDeItems > 0 && <h2>{cantidadDeItems}</h2>}
        </div>
        </NavLink>
    )

}

export default IconoCarrito