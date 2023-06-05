import React, {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) =>{
    const [contador, setContador] = useState(initial)

    const mas = () =>{
        if(contador < stock){
            setContador(contador + 1)
        }
    }
    const menos = () =>{
        if(contador > 1){
            setContador(contador - 1)
        }
    }
    const mandarAlPadre = () =>{
        onAdd(contador)
    }

    return(
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',margin: "10px 0"}}>
                <div style={{display:'flex'}}>
                    <button style={style.boton} onClick={mas}>+</button>
                    <p>{contador}</p>
                    <button style={style.boton} onClick={menos}>-</button>
                </div>
                <button style={style.boton} onClick={mandarAlPadre}>Agregar al carrito</button>
            </div>
    )
}

export default ItemCount

const style = {
    boton: {
        borderRadius: 5,
        background: "#0a6dff",
        color: "white",
        marginBottom: 20,
        fontSize: 18,
        padding: '2px'
    }
}