import { useState } from "react"
const Formulario = ({finalizarCompra}) =>{
    const [datos, setDatos] = useState({name: '', apellido: '', teléfono: '', email: ''})
    const [igualdad, setIgualdad] = useState(true)

    const eventoDato = (e) =>{
        setDatos({...datos, [e.target.name] : e.target.value})
    }

    const eventoFormulario = (event) =>{
        event.preventDefault()
        if(event.target.email1.value != event.target.email2.value){
            setIgualdad(false)
        }else{
            setIgualdad(true)
            finalizarCompra(datos)
        }
    }

    return(
        <form style={style.estiloFormulario} onSubmit={eventoFormulario}>
            <label htmlFor="name">Escriba su nombre</label>
            <br></br>
            <input type="text" id="name" name="name" onChange={eventoDato} required></input>
            <br></br>
            <label htmlFor="apellido">Escriba su apellido</label>
            <br></br>
            <input type="text" id="apellido" name="apellido" onChange={eventoDato} required></input>
            <br></br>
            <label htmlFor="teléfono">Escriba su teléfono</label>
            <br></br>
            <input type="text" id="teléfono" name="teléfono" onChange={eventoDato} required></input>
            <br></br>
            <label htmlFor="email1">Escriba su e-mail</label>
            <br></br>
            <input type="email" id="email1" name="email1" onChange={eventoDato} required></input>
            <br></br>
            <label htmlFor="email2">Otra vez su e-mail</label>
            <br></br>
            <input type="email" id="email2" name="email2" onChange={eventoDato} required></input>
            <p  style={igualdad ? {visibility: "hidden"} : {visibility: "visible"}}>No son iguales</p>
            <br></br>
            <button style={style.boton} type="submit">Realizar compra</button>
        </form>
    )

}
export default Formulario


const style = {
        estiloFormulario: {
            background: "#a6caff",
            width: window.innerWidth < 767 ? "100%" : "432px",
            display: "flex",
            borderRadius: 31,
            flexDirection: "column",
            alignItems: "center",
        },

        boton: {
            borderRadius: 5,
            background: "#0a6dff",
            color: "white",
            marginBottom: 20,
            fontSize: 20
        }
            
}