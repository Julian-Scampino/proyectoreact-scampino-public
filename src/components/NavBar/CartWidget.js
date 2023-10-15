import {FaCartPlus} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {useContext} from 'react'
import {contexto} from '../Context/CartContext'


const IconoCarrito = () => {
    const {cantidadDeItems} = useContext(contexto)
    return(<NavLink to='/Cart'>
        <div id="cartwidget" >
            <FaCartPlus style={{fontSize: '30px'}}/>
            {cantidadDeItems > 0 && <p>{cantidadDeItems}</p>}
        </div>
        </NavLink>
    )

}

export default IconoCarrito