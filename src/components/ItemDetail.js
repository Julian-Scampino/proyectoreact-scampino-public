import ItemCount from "./ItemCount";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { contexto } from "./Context/CartContext";

const ItemDetail = ({ item }) => {
    const { addItem } = useContext(contexto);

    const [comprar, setComprar] = useState(true);

    const onAdd = (unidades) => {
        addItem({ ...item, cantidad: unidades });
        setComprar(false);
    };

    return (
        <div style={style.contenedorRow}>
                <h2 style={style.titulo}>{item.title}</h2>
            <div style={style.contenedorFotoDescription}>
                <div style={style.contenedorColumn40}>
                    <img style={style.img} src={item.image} alt=""></img>
                </div>
                <div style={style.contenedorColumn60}>
                    <p>
                        <strong style={style.resaltado}>ID:</strong> {item.id}
                    </p>
                    <p>
                        <strong style={style.resaltado}>Precio:</strong>{" "}
                        {item.price}
                    </p>
                    <p>
                        <strong style={style.resaltado}>Categoría:</strong>{" "}
                        {item.category}
                    </p>
                    <p>
                        <strong style={style.resaltado}>Descripción:</strong>{" "}
                        {item.description}
                    </p>
                    {comprar ? (
                        <ItemCount
                            stock={item.stock}
                            initial={1}
                            onAdd={onAdd}
                        />
                    ) : (
                        <NavLink to="/cart">
                            <button style={style.boton}>Terminar compra</button>
                        </NavLink>
                    )}
                </div>{" "}
            </div>
        </div>
    );
};
export default ItemDetail;

const style = {
    contenedorRow: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "100%",
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
        flexDirection:  "column",
        margin: "10px 0"
    },
    contenedorColumn60: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        padding: '0px 5%',
        margin: "10px 0"
    },
    contenedorColumn40: {
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
};
