import PropTypes from 'prop-types';

const SingleProduct = ({ product, handleAddToCart }) => {
    return (
        <div className='w-80'>
            <div className='border-2 border-blue-500 rounded-xl p-3'>
                <img className='rounded-xl' src={product.image} alt={`Img of ${product.name}`} />

                <div className='pt-3 space-y-3 text-center'>
                    <h2 className=''>Name: {product.name}</h2>
                    <p>Description: {product.description}</p>
                    <p>Price: {product.price}</p>
                    <button onClick={( () => handleAddToCart(product) )} className='p-3 border-2 rounded-xl border-blue-500'>Add to Cart</button>
                </div>
                
            </div>
        </div>
    );
};



SingleProduct.propTypes = {
    product: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}



export default SingleProduct;