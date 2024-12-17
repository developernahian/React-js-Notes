import { useState } from 'react';
import './AllProducts.css'
import { useEffect } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

export default function AllProducts() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch('./fakeData.json')
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(json => setProducts(json))
      // .then(json => {})
      // .then(json => {
      //   console.log(json);
      //   setProducts(json)
      // })

  }, [])


  
  
  return (
    <div>
      <h1>AllProducts.jsx</h1>
      {
        products.map(product => <SingleProduct key={product.id} product={product}></SingleProduct>)
      }
    </div>
  )
}
