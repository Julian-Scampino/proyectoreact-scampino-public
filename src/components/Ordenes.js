import { collection, doc, getDoc } from 'firebase/firestore'
import { useState, } from 'react'
import React from 'react'
import { db } from '../firebase/firebase'
import ClipLoader from "react-spinners/ClipLoader"


const Ordenes = () =>{

    const [productosOrden, setProductosOrden] = useState({})
    const [productosOrden2, setProductosOrden2] = useState([])
    const [loading, setLoading] = useState(false)
    

    const traer = (e) =>{
        if(((e.target.value).trim()).length == 20){
            setLoading(true)
            let idCollection = collection(db, 'ventas')
            let pedido = doc(idCollection, (e.target.value).trim()) 
            
            getDoc(pedido)
            .then(result => {
                const productoCapturado = {
                    id: result.id,
                    ...result.data()
                }
                setProductosOrden(productoCapturado)
                setProductosOrden2(productoCapturado.productosCarrito)
                setLoading(false)
            })
            .catch(err=>{
                console.log(err)
                setProductosOrden({})
            })
        }else{
            setProductosOrden({})
        }
    }


    return(
        <div style={estilo.estructura}>
            <form style={estilo.formulario}>
                <label htmlFor='orden'>Escriba el ID de su orden si quiere revisarla (no se verán datos personales)</label>
                <input style={estilo.input} type="text" id='orden' name='orden' onChange={traer}></input>
            </form>
            {loading ? <ClipLoader size={200} cssOverride={{margin: 'auto', alingSelf : "center", position: "absolute"}}/> :
            productosOrden2.length > 0 && 
            <div style={estilo.contenedorProductosOrdenes}>
                {productosOrden.productosCarrito.map((element) =>
                <div className="cart-productos" key={element.id}>
                    <h3 className="cart-productos-title">{element.title}</h3>
                    {React.createElement("p", null, `Precio:`, React.createElement("br"), `$${element.price}`)}
                    {React.createElement("p", null, `Cantidad:`, React.createElement("br"), `${element.cantidad}`)}
                </div>
                )}
                <p style={estilo.textoPrecio}><strong style={estilo.resaltadoStrong}>Precio total:</strong> {productosOrden.precioTotal}</p>
            </div>}
        </div>
    )
} 

export default Ordenes
const estilo = {
    estructura: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '30px',
        textAlign: 'center',
        minWidth: '0px',
        width: '100%',
        padding: "8% 0"
    },
    formulario:{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '20px'
    },
    input: {
        borderRadius: '5px',
        border: '1px solid rgba(0, 0, 0, 0.54)',
        boxShadow: 'rgba(0, 0, 0, 0.13) 0px 0px 3px 0px'
    },
    contenedorProductosOrdenes:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    textoPrecio:{
        background: "white"
    },
    resaltadoStrong : {
        textDecoration: "underline",
    },
}