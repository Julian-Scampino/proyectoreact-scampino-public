import Item from './Item'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ItemList.css'
import { useParams } from 'react-router-dom'
const ItemList = ({items}) =>{
  let {categoryId} = useParams()
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1100 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1100, min: 750 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 750, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1.5
        }
      };
    return(
        <div className='contenedor-de-ItemList-con-titulo'>
          {categoryId ? <h2>Todos los productos de {categoryId}</h2> : <h2>Todos los productos</h2>}
        <Carousel containerClass="carousel-container" partialVisible={true} infinite={true} autoPlaySpeed={4000} autoPlay={false} responsive={responsive}>

        {items.map((productos) => <Item key={productos.id} id={productos.id} titulo={productos.title} precio={productos.price} descripcion={productos.description} img={productos.image}/>)}
	</Carousel></div>

    )
}

export default ItemList