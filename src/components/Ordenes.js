import { collection, doc, getDoc } from 'firebase/firestore'
import { useState, } from 'react'
import React from 'react'
import { db } from '../firebase/firebase'
import ClipLoader from "react-spinners/ClipLoader"


const Ordenes = () =>{

    const [productosOrden, setProductosOrden] = useState({})
    const [productosOrden2, setProductosOrden2] = useState([])
    const [loading, setLoading] = useState(false)
    const [noEncontroDocumento, setnoEncontroDocumento] = useState(false)
    
    const traer = (e) =>{
        e.preventDefault()
        console.log(e.target.orden.value);
        let valorSubmit = e.target.orden.value
        setProductosOrden({})
        setProductosOrden2([])
        if(((valorSubmit).trim()).length == 20){
            setLoading(true)
            noEncontroDocumento && setnoEncontroDocumento(false)
            let idCollection = collection(db, 'ventas')
            let pedido = doc(idCollection, (valorSubmit).trim()) 
            getDoc(pedido)
            .then(result => {
                const productoCapturado = {
                    id: result.id,
                    ...result.data()
                }
                setProductosOrden(productoCapturado)
                setProductosOrden2(productoCapturado.productosCarrito)
                setLoading(false)
                if(!productoCapturado?.productosCarrito){
                    setnoEncontroDocumento(true)
                    console.log("pasa por el then pero no econtro el documento")
                }
            })
            .catch(err=>{
                console.log(err)
                setProductosOrden({})
            })
        }else if(((valorSubmit).trim()).length > 20 || ((valorSubmit).trim()).length < 20){
            setLoading(false)
            setnoEncontroDocumento(true)
        }else{
            setProductosOrden({})
        }
    }
    return(
        <div style={estilo.estructura}>
            <h1>Revisar ordenes</h1>
            <form style={estilo.formulario} onSubmit={traer}>
                <label htmlFor='orden'>Escriba el ID de su orden si quiere revisarla (no se verán datos personales)</label>
                <input style={estilo.input} type="text" id='orden' name='orden' /* onChange={traer} */></input>
                <button style={estilo.boton} type="submit">Enviar</button>
            </form>
            {loading ? <ClipLoader size={200} cssOverride={{margin: 'auto', alingSelf : "center", position: "absolute"}}/> :
            productosOrden2?.length > 0 && 
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
            {noEncontroDocumento && <p>No existe una orden con ese Id, pruebe con otro</p> }
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
        padding: "2% 0"
    },
    formulario:{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '13px'
    },
    label:{
        textAlign: "center"
    },
    input: {
        borderRadius: '5px',
        border: '1px solid rgba(0, 0, 0, 0.54)',
        boxShadow: 'rgba(0, 0, 0, 0.13) 0px 0px 3px 0px'
    },
    boton: {
        borderRadius: '354px',
        background: '#72d1d4',
        color: 'black',
        fontSize: '14px',
        padding: '0.2em 0.8em',
        border: '1px solid rgba(0, 0, 0, 0.42)'
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