import { useState } from "react";
import './CartContainer.css'
import Cart from "../Cart/Cart";
import About from "../About/About";
import PropTypes from 'prop-types';

const CartContainer = ({selectedProduct, handleRemoveFromCart}) => {
    console.log(selectedProduct);
    
    
    const [activeTab, setActiveTab] = useState('cart');

    return (
        <div >
            <h1>CartContainer.jsx</h1>
            <div className="flex space-x-24">
                <div className={activeTab === 'cart' ? 'btn active' : 'btn'} onClick={() => setActiveTab('cart')}>Cart</div>
                <div className={activeTab === 'about' ? 'btn active' : 'btn'} onClick={() => setActiveTab('about')}>About</div>
            </div>

            {
                activeTab === 'cart' ? <Cart selectedProduct={selectedProduct} handleRemoveFromCart={handleRemoveFromCart}></Cart> : <About></About>
            }

        </div>
    );
};


CartContainer.propTypes = {
    selectedProduct: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default CartContainer;