import { collection, doc, getDoc } from 'firebase/firestore'
import { useState } from 'react'
import { db } from '../firebase/firebase'


const Ordenes = () =>{

    const [productosOrden, setProductosOrden] = useState({})
    const [productosOrden2, setProductosOrden2] = useState([])
    

    const traer = (e) =>{
        if(((e.target.value).trim()).length == 20){
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
            <label htmlFor='orden'>Escriba el ID de su orden si quiere revisarla (no se verán datos personales)</label>
            <input type="text" id='orden' name='orden' onChange={traer}></input>
            {productosOrden.precioTotal !== undefined && 
                <div>
                    <p><strong style={estilo.resaltado}>ID orden:</strong> {productosOrden.id}</p>
                    <div>
                    <h3><strong style={estilo.resaltado}>Productos</strong></h3> 
                    {productosOrden2.length > 0 && productosOrden.productosCarrito.map((element)=>
                          <p key={element.id}><strong style={estilo.resaltado}>Nombre:</strong> {element.title}</p>
                    
                    )}
                    </div>
                    <p><strong style={estilo.resaltado}>Precio total:</strong> {productosOrden.precioTotal}</p>
                </div>

            }
        </div>
    )
} 

export default Ordenes
const estilo = {
    resaltado : {
        textDecoration: "underline",
    },
    estructura: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'space-evenly'
    }
}