
import { useState } from 'react'
import './App.css'
import AllProducts from './Components/Allproducts/AllProducts'
import CartContainer from './Components/CartContainer/CartContainer'
import Navbar from './Components/Header/Navbar'

function App() {

  const [activeTab, setActiveTab] = useState('cart'); // Only store 'cart' or 'about'


  const handleClickActiveTab = (tab) => {
    setActiveTab(tab); // Update the state with the clicked // update by 'cart' or 'about'
  };
  console.log(activeTab);//output: cart or about
  
  

  

  


  return (
    <>
      <div className='container'>
        <Navbar></Navbar>

        <div className='flex'>
        <AllProducts></AllProducts>
        <CartContainer activeTab={activeTab} handleClickActiveTab={handleClickActiveTab} />
        </div>

      </div>

      
    </>
  )
}

export default App
