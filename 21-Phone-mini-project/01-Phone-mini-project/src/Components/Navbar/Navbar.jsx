import './Navbar.css'
import PropTypes from 'prop-types';

export default function Navbar({selectedProducts, price}) {
  return (
    <div>


      <div className="nav-container">

        <div>
          <h2>Logo</h2>
        </div>

        <div className="flex">
          <li>Home</li>
          <li>Poduct</li>
          <li>Cart {selectedProducts.length}</li>
          <li>$ {price}</li>
        </div>

      </div>




    </div>
  )
}

Navbar.propTypes = {
  selectedProducts: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired
};

