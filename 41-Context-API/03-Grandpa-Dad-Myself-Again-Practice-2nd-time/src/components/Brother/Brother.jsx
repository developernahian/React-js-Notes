import { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";


const Brother = () => {
    // const money = useContext(MoneyContext)// wrong because MoneyContext value is an array. so money is and array.
    const [money] = useContext(MoneyContext)
    return (
        <div>
            <h2>Brother</h2>
            <p>Money: {money}</p>
            {/* here money is the first index of money array */}
        </div>
    );
};

export default Brother;