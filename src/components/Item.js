import { NavLink } from "react-router-dom";
import { useState } from "react";

const Item = ({ titulo, precio, img, id }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={hovered ? style.contenedorHOVER : style.contenedor}
        >
            <h2 style={style.titulo}>{titulo}</h2>
            <p> {`Precio: $${precio}`}</p>
            <img style={style.img} src={img} alt=""></img>
            <NavLink to={`/item/${id}`}>
                <button style={style.boton}>Ver mas</button>
            </NavLink>
        </div>
    );
};
const style = {
    contenedor: {
        border: "2px solid black",
        width: 250,
        height: 320,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#acdeff",
        borderRadius: "5%",
        boxShadow: "0px 0px 2px 0.3px black"
    },
    contenedorHOVER: {
        border: "2px solid black",
        width: "250px",
        height: "320px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "rgb(172, 222, 255)",
        borderRadius: "5%",
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
        fontSize: "21px",
        textAlign: "center",
    },
    img: {
        width: 100,
        height: 100,
    },
    boton: {
        borderRadius: 5,
        background: "#0a6dff",
        color: "white",
        marginBottom: 20,
        fontSize: 18,
    },
};
export default Item;
