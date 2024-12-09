import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css"


const Bottles = () => {

      //data load korte parle array er moddhe thakbe. load na korte parle empty array hobe. so default man empty array
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, [])


    const handleAddToCart = (bottle) => {
        // console.log('bottle going to added');
        // console.log(bottle);

        const newCart = [...cart, bottle];
        setCart(newCart)

    }

    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            <h3>Cart: {cart.length}</h3>
            
            <div className="bottles-container">
            {
                bottles.map(bottle => <Bottle 
                key={bottle.id} 
                bottle={bottle}
                handleAddToCart={handleAddToCart}
                ></Bottle>)
            }
            </div>

            

        </div>
    );
};

export default Bottles;