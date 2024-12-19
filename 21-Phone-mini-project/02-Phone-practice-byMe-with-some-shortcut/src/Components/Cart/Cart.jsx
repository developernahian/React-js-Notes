import PropTypes from 'prop-types';

const Cart = ({selectedProduct, handleRemoveFromCart}) => {
    
    console.log(selectedProduct);
    // const [image] = selectedProduct
    
    return (
        <div>
            <h1>Cart</h1>
            {
                selectedProduct.map(product=> <div key={product.id}>
                    <div className='flex justify-between items-center space-x-5 py-3'>
                        <img className='w-16' src={product.image} alt="img" />
                        <p>{product.name}</p>
                        <p>Price: ${product.price}</p>
                        <button onClick={() => handleRemoveFromCart(product)}  className='p-3 border-2 rounded-xl border-blue-500'>Delete</button>
                    </div>

                    

                </div>)
            }
        </div>
    );
};

Cart.propTypes = {
    selectedProduct: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;