import { useContext, useState } from "react"
import {contexto} from './Context/CartContext'
import {NavLink} from 'react-router-dom'
import Formulario from './Formulario'
import {doc, addDoc, collection, serverTimestamp, updateDoc} from 'firebase/firestore'
import {db} from '../firebase/firebase'
import './Cart.css'
import React from "react"

const Cart = () =>{
    const [idVentas, setIdVenta] = useState('')

    const {removeItem, clear, productosCarrito, precioTotal} = useContext(contexto)

    const eliminar = (element) =>{
        removeItem(element)
    }
    const vaciar = () =>{
        clear()
    }
    const finalizarCompra = (usuario) =>{
        const ventasCollection = collection(db, 'ventas')
        addDoc(ventasCollection, {usuario, productosCarrito, precioTotal, date: serverTimestamp()})
        .then(res => setIdVenta(res.id))
        let copiaArray = [...productosCarrito]
        copiaArray.forEach((element) => {
            let updateCollection = doc(db, 'productos', element.id)
            updateDoc(updateCollection, {stock: (element.stock - element.cantidad)})
        });
        clear()
    }
    return(
        <div id="cart-contenedor">
            {productosCarrito.length <= 0 && <div className="contenedor-noHayProductos"><h3>No hay productos todavia en el carrito</h3><NavLink to="/"><button  >Volver a Home</button></NavLink></div>}
            {productosCarrito.length > 0 && productosCarrito.map((element) =>
            <div className="cart-productos" key={element.id}>
                <h3 className="cart-productos-title">{element.title}</h3>
                {React.createElement("p", null, `Precio:`, React.createElement("br"), `$${element.price}`)}
                {React.createElement("p", null, `Cantidad:`, React.createElement("br"), `${element.cantidad}`)}
                {/* <button className="cart-productos-btn" onClick={()=>eliminar(element)}>X</button> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg cart-productos-btn" viewBox="0 0 16 16" onClick={()=>eliminar(element)}>
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </div>
            )}
            {productosCarrito.length > 0 && <h4 id="cart-precioTotal">{`Precio total: $${precioTotal}`}</h4>}
            {productosCarrito.length > 0 && <button id="cart-btn-vaciarCart" onClick={vaciar}>Vaciar carrito</button>}
            {productosCarrito.length > 0 && <Formulario finalizarCompra={finalizarCompra}/>}
            {idVentas != '' && <h4>{`El Id de tu compra es ${idVentas}`}</h4>}
        </div>
    )
}

export default Cart