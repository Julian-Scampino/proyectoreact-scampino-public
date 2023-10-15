import { useState, useEffect } from 'react'
import ItemList from './ItemlList'
import ClipLoader from "react-spinners/ClipLoader"
import { useParams } from 'react-router-dom'
import {db} from '../firebase/firebase'
import {getDocs, collection, query, where} from 'firebase/firestore'
import Swal from 'sweetalert2'

const ItemListContainer = ({greeting}) =>{

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    let {categoryId} = useParams()
    console.log("log categoryId :", categoryId)
    console.log("log useParams() :", useParams())

    useEffect(()=>{
        loading != true && setLoading(true)
       /*  const prueba = categoryId 
        ? query(collection(db, 'productos'), where('category', '==', categoryId)) 
        : collection(db, 'productos')
        getDocs(prueba)
        .then(result => {
            const lista = result.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data(),
                }
            })
            setProductos(lista)
        })
        .catch(err=>console.log(err))
        .finally(() =>{
            setLoading(false)
        }) */
        fetch(categoryId ? `https://fakestoreapi.com/products/category/${categoryId}` : `https://fakestoreapi.com/products`)
            .then(res=>res.json())
            .then(json=>{
                setProductos(json)
                
            })
                .catch(err=>console.log("log de error de fetch productos: ",err))
        .finally(() =>{
            setLoading(false)
        })
    },[categoryId])

    useEffect(()=>{
        categoryId ?? Swal.fire({title: `<h3 style="font-size: 22px;"> 'Hola soy Julián Scampino. Este es mi trabajo del curso de React de CoderHouse. Está hecho con React, con datos de fakestoreapi y firebase/firestore como back-end'</h3>`})

    },[])

    return(
        <>
            
            {loading ? <ClipLoader size={200} cssOverride={{margin: 'auto', alingSelf : "center"}}/> : <ItemList items={productos}/>}
        </>
    )
}
export default ItemListContainer