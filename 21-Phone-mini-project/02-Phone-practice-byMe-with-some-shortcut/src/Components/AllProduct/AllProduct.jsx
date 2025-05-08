import { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import PropTypes from 'prop-types';


const AllProduct = ({handleAddToCart}) => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    // console.log(products);
    


    return (
        <div>
            <h1>AllProduct</h1>
            {
                products.map(product => <SingleProduct key={product.id} product={product} handleAddToCart={handleAddToCart}></SingleProduct>)
            }
        </div>
    );
};

AllProduct.propTypes = {
    handleAddToCart: PropTypes.func.isRequired
}


export default AllProduct;