import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";



const Special = ({asset}) => {

    // gift, gifttt, g or je kono nam diye receive kora jabe
    const gift = useContext(AssetContext)

    return (
        <div>
            <h2>Special</h2>
            <p>Has: {asset}</p>
            <p>Also has: {gift}</p>
        </div>
    );
};

export default Special;

// asset ta prop driling korechi ekhane
// gift ta Grandpa theke useContext diye receive korechi