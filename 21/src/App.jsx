
import { useState } from 'react'
import './App.css'
import AllProducts from './Components/Allproducts/AllProducts'
import CartContainer from './Components/CartContainer/CartContainer'
import Navbar from './Components/Navbar/Navbar'

function App() {



  const [activeTab, setActiveTab] = useState('cart'); // Only store 'cart' or 'about'
  const [selectedProducts, setSelectedProducts] = useState([]);

  const [price, setPrice] = useState(500);


const handleIncreasePrice = (pr) => {
  setPrice(price+ pr);
}

const handleDecreasePrice = (id) => {
  const product = selectedProducts.find(p => p.id == id);
  setPrice(price - product.price);
}


  const handleClickActiveTab = (tab) => {
    setActiveTab(tab); // Update the state with the clicked // update by 'cart' or 'about'
  };
  // console.log(activeTab);//output: cart or about








  const handleSelectedProducts = (AddToCartProduct) => {
    // console.log(AddToCartProduct);
    // IMPORTANT:
    //isEsist undefine = false.. isExist not undefine = true
    // const isExist = selectedProducts.find(product => product.id == AddToCartProduct.id);
    //or
    // const isExist = selectedProducts.find(item => item.id == AddToCartProduct.id);
    //or
    const isExist = selectedProducts.find(p => p.id == AddToCartProduct.id);

    
    //isExist undefine = false.. isExist not undefine = true
    if(isExist){
      console.log('age theke ache');
      
      alert('Product already added to cart');
    }
    else{
      console.log('naiiiii, so add korlam');
      handleIncreasePrice(AddToCartProduct.price);
      
      setSelectedProducts([...selectedProducts, AddToCartProduct]);
    }

  };
  // console.log(selectedProducts);
    
//   isExist
// The result of find() is stored in the isExist variable.
// If a matching product is found, isExist will hold the product object.
// If no match is found, isExist will be undefined.







//id ta khuje pele ota delete kore baki gulo dekhabe. eta filer er kaz. p-> product->item-abc kichu akta dilei hobe...
const handleDelete = (id) => {
  handleDecreasePrice(id)
  const remaining = selectedProducts.filter(p => p.id !== id);
  setSelectedProducts(remaining);
}




  

  


  return (
    <>
    <Navbar selectedProducts={selectedProducts} price={price}></Navbar>
      <div className='container'>
        

        <div className='flex'>
        <AllProducts handleSelectedProducts={handleSelectedProducts}></AllProducts>
        <CartContainer activeTab={activeTab} handleClickActiveTab={handleClickActiveTab} selectedProducts={selectedProducts}
        handleDelete={handleDelete} />
        </div>

      </div>

      
    </>
  )
}

export default App











