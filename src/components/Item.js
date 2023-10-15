import { NavLink } from "react-router-dom";
import { useState } from "react";
import './item.css'

const Item = ({ titulo, precio, img, id }) => {
    const [hovered, setHovered] = useState(false);
    console.log({ titulo, precio, img, id });
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="card"
        >
            <img src={img} alt=""></img>
            <h2 >{titulo}</h2>
            <p> {`$${precio}`}</p>
            <NavLink to={`/item/${id}`}>
                Ver mas
            </NavLink>
        </div>
    );
};
/* const style = {
    contenedor: {
        border: "2px solid black",
        width: 210,
        height: 350,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#acdeff",
        borderRadius: "3%",
        boxShadow: "0px 0px 2px 0.3px black",
    },
    contenedorHOVER: {
        border: "2px solid black",
        width: 210,
        height: 350,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "rgb(172, 222, 255)",
        borderRadius: "3%",
        transform: "scale(1.01)",
        filter: "brightness(105%)",
        boxShadow: "0px 0px 7px 0.5px black",
    },
    titulo: {
        display: "-webkit-box",
        WebkitLineClamp: "3",
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
        fontSize: "15px",
        textAlign: "center",
    },
    img: {
        // width: 100,
        //height: 100,
        height: 210,
        borderRadius: "3%",    
    },
    boton: {
        borderRadius: 5,
        background: "#0a6dff",
        color: "white",
        marginBottom: 20,
        fontSize: 18,
    },
}; */
export default Item;
