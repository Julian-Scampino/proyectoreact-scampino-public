import { useState, useEffect } from "react";
import "./NavBar.css";
import logo from "../../logo.svg";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
/* import { db } from "../../firebase/firebase";
import { getDoc, collection, doc } from "firebase/firestore"; */

const NavBar = () => {
    /* const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        const coleccionCatalogo = collection(db, "categorias");
        const documento = doc(coleccionCatalogo, "categoriasNavBar");
        getDoc(documento)
            .then((res) => {
                let resArray = res.data().array;
                setCategorias(resArray);
            })
            .catch((err) => console.log(err));
    }, []); */
    const categorias = ["electronics", "jewelery", "men's clothing", "women's clothing"]

    return (
        <header>
            <div id="nombreLogo">
                <NavLink to="/">
                    <h1>
                        Tienda
                        Online
                    </h1>
                </NavLink>
                <NavLink to="/">
                    <img src={logo} alt="logo" />
                </NavLink>
            </div>

            <nav>
                {categorias.map((categorias) => (
                    <NavLink style={{textTransform: 'capitalize'}}key={categorias} to={`/category/${categorias}`}>
                        {categorias}
                    </NavLink>
                ))}
            </nav>
            <div id="cartOrdenes">
                <CartWidget />
                <NavLink id="ordenes-nav" to={`/ordenes`}>
                    Revisar ordenes
                </NavLink>
            </div>
        </header>
    );
};

export default NavBar;
