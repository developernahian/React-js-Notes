
import { useState } from 'react';
import './App.css'
import AllProduct from './Components/AllProduct/AllProduct'
import CartContainer from './Components/CartContainer/CartContainer'
import Navbar from './Components/Navbar/Navbar'

function App() {

  const [selectedProduct, setSelectedProduct] = useState([]);
  const [price, setPrice] = useState(0);



  // const handleAddToCart = (product) => {
  //   if(selectedProduct.find(p => p.id == product.id)) 
  //     return;
  //   setSelectedProduct([...selectedProduct, product]);
  // }
  const handleAddToCart = (product) => {
    if(selectedProduct.find(p => p.id == product.id)) {
      alert('Product already added to cart');
    }
      else{
        setSelectedProduct([...selectedProduct, product]);
        setPrice(price + product.price);
      }
   
  }


  //   filter id pele remove korbe and baki gulo return korbe
  const handleRemoveFromCart = (product) => {
    const updatedCart = selectedProduct.filter(p => p.id !== product.id);
    setSelectedProduct(updatedCart);
    setPrice(price - product.price);
};






  return (
    <>
      <Navbar cartLength={selectedProduct.length} price={price}></Navbar>

      <div className='flex justify-between w-11/12 mx-auto pt-5'>
        <AllProduct handleAddToCart={handleAddToCart}></AllProduct>
        <CartContainer selectedProduct={selectedProduct} handleRemoveFromCart={handleRemoveFromCart}></CartContainer>
      </div>


    </>
  )
}

export default App
