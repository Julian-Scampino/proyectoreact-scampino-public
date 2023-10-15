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
    //const categorias = ["electronics", "jewelery", "men's clothing", "women's clothing"]

    return (
        <header>
            <div id="nombreLogo">
                <NavLink to="/">
                    <p id="nav-titulo">
                        Tienda
                        Online
                    </p >
                </NavLink>
                <NavLink to="/">
                    <img src={logo} alt="logo"  />
                </NavLink>
            </div>

            <nav>
                <NavLink className="nav-category"style={{textTransform: 'capitalize'}} to={`/category/electronics`}>electronics</NavLink>
                <NavLink className="nav-category"style={{textTransform: 'capitalize'}} to={`/category/jewelery`}>jewelery</NavLink>
                <NavLink className="nav-category"style={{textTransform: 'capitalize'}} to={`/category/men's clothing`}>men's-clothing</NavLink>
                <NavLink className="nav-category"style={{textTransform: 'capitalize'}} to={`/category/women's clothing`}>women's-clothing</NavLink>
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
