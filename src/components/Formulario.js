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
            <input style={style.input} type="text" id="name" name="name" onChange={eventoDato} required></input>
            <label htmlFor="apellido">Escriba su apellido</label>
            <input style={style.input} type="text" id="apellido" name="apellido" onChange={eventoDato} required></input>
            <br></br>
            <label htmlFor="teléfono">Escriba su teléfono</label>
            <input style={style.input} type="text" id="teléfono" name="teléfono" onChange={eventoDato} required></input>
            <br></br>
            <label htmlFor="email1">Escriba su e-mail</label>
            <input style={style.input} type="email" id="email1" name="email1" onChange={eventoDato} required></input>
            <label htmlFor="email2">Otra vez su e-mail</label>
            <input style={style.input} type="email" id="email2" name="email2" onChange={eventoDato} required></input>
            <p  style={igualdad ? {visibility: "hidden"} : {visibility: "visible", color: "red"}}>(No son iguales)</p>
            <button style={style.boton} type="submit">Realizar compra</button>
        </form>
    )

}
export default Formulario


const style = {
        estiloFormulario: {
            background: "#a6caff",
            padding: '2%',
            display: "flex",
            borderRadius: 31,
            flexDirection: "column",
            alignItems: "center",
        },
        input:{
            borderRadius: '100px',
            border: '1px solid #0000008a',
            boxShadow: '0 0 3px 0 #00000021'
        },

        boton: {
            borderRadius: '354px',
            background: 'rgb(44, 129, 255)',
            color: 'white',
            margin: '10px 0px',
            fontSize: '14px',
            padding: '0.2em 0.8em',
            border: '1px solid rgba(0, 0, 0, 0.42)'
        }
            
}