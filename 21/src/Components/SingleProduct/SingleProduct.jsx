import './SingleProduct.css'
import PropTypes from 'prop-types';

export default function SingleProduct({product}) {
    console.log(product);
    
    const {name, image, price, description, isFeature } = product

  return (
    <div className='card'>
      {/* <h1>SingleProduct.jsx</h1> */}
      <img className='img' src={image} alt={`Img of ${product.name}`} />
      <h2>Name: {name}</h2>
      <p>Description: {description}</p>
      
      <div>
        <p>Price: ${price}</p>
        <p>Feature: {isFeature ? 'Feature Category' : 'Not Category'}</p>
      </div>

      <button>Add to Cart</button>
    </div>
  )
}

SingleProduct.propTypes = {
  product: PropTypes.object.isRequired, // Must be a string and is required
//   handleClickActiveTab: PropTypes.func.isRequired, // Must be a function and is required
};


