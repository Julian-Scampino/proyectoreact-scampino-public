import { createContext, useEffect, useState } from "react";

export const contexto = createContext()
const {Provider} = contexto

const CartContext = ({children}) =>{
    const [productosCarrito, setProductosCarrito] = useState(JSON.parse(localStorage.getItem("carritoStorage")) ?? [])
    const [cantidadDeItems, setCantidadDeItems] = useState(0)
    const [precioTotal, setPrecioTotal] = useState(0)

    const resumenItems = () =>{
        let totalItems = productosCarrito.reduce((acumulador, elemento) => acumulador + elemento.cantidad, 0)
        setCantidadDeItems(totalItems)

    }
    const resumenCompra = () =>{
        let subtotal = 0
        let preciototal = 0
        productosCarrito.length <= 0 ? setPrecioTotal(0) : productosCarrito.forEach((element)=>{
            subtotal = parseFloat(element.price) * parseFloat(element.cantidad)
            preciototal += subtotal
            setPrecioTotal(preciototal.toFixed(2))
        })
    }
    useEffect(()=>{
        resumenItems()
        resumenCompra()
        if(productosCarrito.length > 0){
            localStorage.setItem("carritoStorage", JSON.stringify(productosCarrito))
        }
        if(productosCarrito.length <= 0){
            localStorage.removeItem("carritoStorage")
        }
    }, [productosCarrito])
    
    const addItem = (item) => {
        if(isInCart(item)){
            let indice = productosCarrito.findIndex(element => element.id === item.id)
            let copiaCarrito = [...productosCarrito]
            copiaCarrito[indice].cantidad += item.cantidad
            setProductosCarrito(copiaCarrito)
        }else{
            setProductosCarrito([...productosCarrito, item])
        }
    }
    const removeItem = (item) =>{
        let indiceAEliminar = productosCarrito.findIndex(element => element.id === item.id)
        let otraCopia = [...productosCarrito]
        otraCopia.splice(indiceAEliminar, 1)
        setProductosCarrito(otraCopia)
        
    }
    const clear = () =>{
        setProductosCarrito([])
        setCantidadDeItems(0)
        setPrecioTotal(0)
    
    }
    const isInCart = (item) =>{
        return productosCarrito.some(element => element.id === item.id)
    }

    return(
    <Provider value={{addItem, removeItem, clear, productosCarrito, cantidadDeItems, precioTotal}}>
        {children}
    </Provider>
    )
}

export default CartContext