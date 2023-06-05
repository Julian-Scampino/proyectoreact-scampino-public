import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter, Routes, Route, Navigate  } from "react-router-dom"
import Cart from './components/Cart'
import CartContext from './components/Context/CartContext'
import Ordenes from './components/Ordenes'
import Footer from './components/Footer'


function App() {
  return (
    <BrowserRouter>
    <CartContext>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenido"/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Bienvenido"/>}/>
        <Route path='/item/:productId' element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/ordenes' element={<Ordenes/>}/>
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
      <Footer/>
    </CartContext>
    </BrowserRouter>

  );
  
}

export default App;
