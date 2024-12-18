
import { useState } from 'react'
import './App.css'
import AllProducts from './Components/Allproducts/AllProducts'
import CartContainer from './Components/CartContainer/CartContainer'
import Navbar from './Components/Header/Navbar'

function App() {

  

  const [activeTab, setActiveTab] = useState('cart'); // Only store 'cart' or 'about'
  const [selectedProducts, setSelectedProducts] = useState([]);







  const handleClickActiveTab = (tab) => {
    setActiveTab(tab); // Update the state with the clicked // update by 'cart' or 'about'
  };
  // console.log(activeTab);//output: cart or about








  const handleSelectedProducts = (AddToCartProduct) => {
    // console.log(AddToCartProduct);
    // IMPORTANT:
    //isEsist undefine = false.. isExist not undefine = true
    const isExist = selectedProducts.find(product => product.id == AddToCartProduct.id);
    //or
    // const isExist = selectedProducts.find(item => item.id == AddToCartProduct.id);
    //or
    // const isExist = selectedProducts.find(yesNo => yesNo.id == AddToCartProduct.id);
    
    //isExist undefine = false.. isExist not undefine = true
    if(isExist){
      console.log('age theke ache');
      
      alert('Product already added to cart');
    }
    else{
      console.log('naiiiii');
      
      setSelectedProducts([...selectedProducts, AddToCartProduct]);
    }

  };
  // console.log(selectedProducts);
    
//   isExist
// The result of find() is stored in the isExist variable.
// If a matching product is found, isExist will hold the product object.
// If no match is found, isExist will be undefined.








  

  


  return (
    <>
      <div className='container'>
        <Navbar></Navbar>

        <div className='flex'>
        <AllProducts handleSelectedProducts={handleSelectedProducts}></AllProducts>
        <CartContainer activeTab={activeTab} handleClickActiveTab={handleClickActiveTab} />
        </div>

      </div>

      
    </>
  )
}

export default App
