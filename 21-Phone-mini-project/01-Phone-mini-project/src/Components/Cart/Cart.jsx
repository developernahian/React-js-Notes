import PropTypes from 'prop-types';
import './Cart.css'

export default function Cart({selectedProducts, handleDelete}) {
  console.log(selectedProducts);
  
  return (
    <div>
      <h1>Add to Cart</h1>

      {
        selectedProducts.map(product => <div key={product.id}>
        <div className='flex margin-top'>

        <img className='selected-img' src={product.image} alt="" />
        <p className='padding-left'>{product.name}</p>
        <p className='padding-left'>Price: ${product.price}</p>
        <button className='margin-left' onClick={() => handleDelete(product.id)}>Delete</button>
        </div>
        
        </div>)
      }
    </div>
  )
}


Cart.propTypes = {
  selectedProducts: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired
};