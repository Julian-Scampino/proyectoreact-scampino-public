import React, { useState } from "react";
import "./ItemDetail.css"

const ItemCount = ({ stock, initial, onAdd }) => {
    const [contador, setContador] = useState(initial);

    const mas = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };
    const menos = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };
    const mandarAlPadre = () => {
        onAdd(contador);
    };

    return (
        <>
            <div /* style={{ display: "flex",gap: '5px' }} */>
                <button className="count-contenedor-masMenos" /* style={style.botonesMasMenos} */ onClick={mas}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                </svg>
                </button>
                <p /* style={style.numero} */>{contador}</p>
                <button className="count-contenedor-masMenos" /* style={style.botonesMasMenos} */ onClick={menos}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/>
                </svg>
                </button>
            </div>
            <button className="count-contenedor-botonAgregarCarrito" /* style={style.botones} */ onClick={mandarAlPadre}>
                Agregar al carrito
            </button>
            </>
    );
};

export default ItemCount;

/* const style = {
    contenedorCount: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px 0",
        gap: '10px'
    },
    numero: {
        fontSize: "23px",
    },
    botonesMasMenos: {
        borderRadius: "5px",
        background: "rgb(10, 109, 255)",
        color: "white",
        fontSize: "18px",
    },
    botones: {
        borderRadius: 5,
        background: "#0a6dff",
        color: "white",
        marginBottom: 20,
        fontSize: 18,
        padding: "2px",
    },
}; */
