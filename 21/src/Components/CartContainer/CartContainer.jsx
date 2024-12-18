import PropTypes from 'prop-types';
//rfc
import './CartContainer.css'
import Cart from '../Cart/Cart';
import About from '../About/About';

export default function CartContainer({ activeTab, handleClickActiveTab , selectedProducts, handleDelete}) {
  // console.log(activeTab);//output: cart or about
  // console.log(handleClickActiveTab);// output: function





  return (
    <div>
      <h1>CartContainer.jsx</h1>


      {/* 
.active{
    background-color: blue;
    color: white;
}
.btn{
    font-size: 18px;
    font-weight: bold;
    padding: 15px;
    border: 1px solid black;
    border-radius: 10px;
}
*/}


      <div className="flex">
        {/* Toggle Buttons */}
        <div
          onClick={() => handleClickActiveTab('cart')}
          className={`${activeTab === 'cart' ? 'active btn' : 'btn'}`}
        >
          Cart
        </div>
        <div
          onClick={() => handleClickActiveTab('about')}
          className={`${activeTab === 'about' ? 'active btn' : 'btn'}`}
        >
          About
        </div>
      </div>

      {/* Conditional Rendering */}
      {activeTab === 'cart' ? <Cart selectedProducts={selectedProducts} handleDelete={handleDelete}/> : <About />}

    </div>
  )
}

// Prop validation
CartContainer.propTypes = {
  activeTab: PropTypes.string.isRequired, // Must be a string and is required
  handleClickActiveTab: PropTypes.func.isRequired, // Must be a function and is required
  selectedProducts: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired
};



