import { useState, useEffect } from 'react'
import ItemList from './ItemlList'
import ClipLoader from "react-spinners/ClipLoader"
import { useParams } from 'react-router-dom'
/* import {db} from '../firebase/firebase' */
/* import {getDocs, collection, query, where} from 'firebase/firestore' */
import Swal from 'sweetalert2'
import ItemListOferta from './ItemListOferta'

const ItemListContainer = ({greeting}) =>{

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    let {categoryId} = useParams()

    useEffect(()=>{
        loading != true && setLoading(true)

        fetch(categoryId ? "../productos.json" : "./productos.json")
            .then(res=>res.json())
            .then(json=>{
                if(categoryId){
                    let productosCategoria = json.filter((x) => x.category == categoryId)
                    setProductos(productosCategoria)
                }else{
                    setProductos(json)
                }
                
            })
                .catch(err=>console.log("log de error de fetch productos: ",err))
        .finally(() =>{
            setLoading(false)
        })
    },[categoryId])

    useEffect(()=>{
        JSON.parse(sessionStorage.getItem("infoUsuario"))?.visita || Swal.fire({title: `<h3 style="font-size: 22px;"> 'Hola soy Julián Scampino. Este es mi trabajo del curso de React de CoderHouse. Está hecho con React, con datos de fakestoreapi y firebase/firestore como back-end'</h3>`, confirmButtonColor: "#538e8f"})
        sessionStorage.setItem("infoUsuario", JSON.stringify({visita: "true"}))

    },[])

    return(
        <>
            
            {loading ? <ClipLoader size={200} speedMultiplier={0.7}  cssOverride={{margin: 'auto', alingSelf : "center", borderWidth: '6px'}}/> : 
            <main>
                <h1 style={{textAlign:"center"}}>{categoryId}</h1>
                <ItemListOferta items={productos}/>
                <ItemList items={productos}/>
            </main>}
        </>
    )
}
export default ItemListContainer