import { NavLink } from 'react-router-dom'
import './ItemListOferta.css'
const ItemListOferta = ({items}) =>{
    return(
        <div id="contenedor-de-ofertas">
            <h2>Ofertas de la semana -30% de descuento</h2>
            <div id="contenedor-de-productos-oferta">{items.length > 0 ? items.map((producto) => producto.id % 3 == 0 && 
            <NavLink key={producto.id} to={`/item/${producto.id}`}>
            <div  className="contenedor-producto-oferta">
                <div className="contenedor-img-producto-oferta">
                <img className="img-producto-oferta" src={require(`../../public/Imagenes-productos/${producto.image}`)} alt={producto.title}></img>
                <p className='oferta-parrafo-titulo-producto'>{producto.title}</p>
                </div>
                <div className="ribbon-content">
                    <span className="ribbon">Oferta -30%</span>
                </div>
            </div></NavLink>) : <p>Ups! en este momento no hay ofertas...</p> }</div>
            
        </div>
    
    )
}
export default ItemListOferta