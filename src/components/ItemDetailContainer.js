import {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import ClipLoader from "react-spinners/ClipLoader"
import {useParams} from 'react-router-dom'
import {db} from '../firebase/firebase'
import {getDoc, collection, doc} from 'firebase/firestore'

const ItemDetailContainer = () =>{
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()
    
    useEffect(() =>{
        const productCollection = collection(db, 'productos')
        const referencia = doc(productCollection, productId)
        getDoc(referencia)
        .then(res =>{
            const productoCapturado = {
                id: res.id,
                ...res.data()
            }
            setProducto(productoCapturado)
        })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    },[productId])

    return(
        <>
            {loading ? <ClipLoader size={200}/> : <ItemDetail item={producto}/>}
        </>
    )
}

export default ItemDetailContainer