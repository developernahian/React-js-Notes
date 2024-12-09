import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css"


const Bottles = () => {

      //data load korte parle array er moddhe thakbe. load na korte parle empty array hobe. so default man empty array
    const [bottles, setBottles] = useState([])
    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, [])

    return (
        <div>
            <h2>Total Bottle: {bottles.length}</h2>
            
            <div className="bottles-container">
            {
                bottles.map(bottle => <Bottle 
                key={bottle.id} 
                bottle={bottle}
                ></Bottle>)
            }
            </div>

            

        </div>
    );
};

export default Bottles;