import ItemCount from "./ItemCount";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { contexto } from "../Context/CartContext";
import "./ItemDetail.css"

const ItemDetail = ({ item }) => {
    const { addItem } = useContext(contexto);

    const [comprar, setComprar] = useState(true);

    const onAdd = (unidades) => {
        addItem({ ...item, cantidad: unidades });
        setComprar(false);
    };
    return (
        <div className="todoDetail" /* style={style?.contenedorRow} */>
                {/* <h1 id='todoDetail-title' >{item.title}</h1> */}
            <div className="todoDetail-contenedorFotoTexto" /* style={style?.contenedorFotoDescription} */>
                <div className="todoDetail-contenedorFoto" /* style={style?.contenedorImg} */>
                    <img className="todoDetail-img" /* style={style?.img} */ src={item.image} alt=""></img>
                </div>
                <div className="todoDetail-contenedorexto" /* style={style?.contenedorTexto} */>
                <h1 id='todoDetail-title' /* style={style?.titulo} */>{item.title}</h1>
                    <p className="todoDetail-contenedorexto-precio">
                        <strong /* style={style?.resaltado} */>Precio: </strong>{" "}
                        ${item.price}
                    </p>
                    <p className="todoDetail-contenedorexto-categoria">
                        <strong /* style={style?.resaltado} */>Categoría:</strong>{" "}
                        {item.category}
                    </p>
                    <p className="todoDetail-contenedorexto-descripcion">
                        <strong /* style={style?.resaltado} */>Descripción:</strong>{" "}
                        {item.description}
                    </p>
                    {comprar ? (
                        <ItemCount
                            stock={item.stock ?? 5}
                            initial={1}
                            onAdd={onAdd}
                        />
                    ) : ( 
                        <NavLink className='detail-link-finalizarCompra' to="/cart">
                            <button className="todoDetail-contenedor-botonComprar" /* style={style?.boton} */>Terminar compra</button>
                        </NavLink>
                    )}
                </div>{" "}
            </div>
        </div>
    );
};
export default ItemDetail;

/* const style = {
    contenedorRow: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "100%",
        margin: "0% 5%"
    },
    titulo: {
         textAlign: "center",
         display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        height: "100%",
        margin: "10px 0"
    },
    contenedorFotoDescription: {
        display: "flex",
        flexDirection: window.innerWidth < 767 ? "column" : "row",
        gap: "10%",
    },
    contenedorTexto: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        padding: '0px 5%',
        margin: "10px 0"
    },
    contenedorImg: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        margin: "10px 0"
    },
    resaltado: {
        textDecoration: "underline",
    },
    img: {
        width: 200,
        height: 200,
        border: "solid black",
    },
    boton: {
        borderRadius: 5,
        background: "#0a6dff",
        color: "white",
        marginBottom: 20,
        fontSize: 18,
        padding: '2px'
    },
}; */
