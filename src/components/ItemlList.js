import Item from './Item'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ItemList.css'
const ItemList = ({items}) =>{
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

        <Carousel partialVisible={true} infinite={false} autoPlaySpeed={4000} autoPlay={true} responsive={responsive}>

        {items.map((productos) => <Item key={productos.id} id={productos.id} titulo={productos.title} precio={productos.price} descripcion={productos.description} img={productos.image}/>)}
	</Carousel>

    )
}

export default ItemList