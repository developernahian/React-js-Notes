import PropTypes from 'prop-types';

const Navbar = ({cartLength, price}) => {
    return (
        <div className="flex justify-between list-none  items-center px-20 py-5 bg-pink-300 sticky top-0">
            <div>
                <h2 className="text-4xl font-bold">Logo</h2>
            </div>
            <div className="flex text-2xl px-5 space-x-5">
                <li>Home</li>
                <li>Poduct</li>
                <li>Cart: {cartLength}</li>
                <li>Total Price $ {price}</li>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    cartLength: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
}



export default Navbar;