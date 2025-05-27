import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';

//  If a component tries to use the context but isn’t wrapped by a Provider, it will still get 'gold'.
// const AssetContext = createContext('1')
//je kono man dewa jai as a default value against gold
//context conponent er bahire declear kore, tobe alada file e declar kora jai. AssetContext er niche yellow error dekhai alada file e declear na korle
//but ekhane declear korle vul nai, kor ajai.
export const AssetContext = createContext('gold')
export const MoneyContext = createContext(1000)

const Grandpa = () => {

    const asset = 'diamond'
    const [money, setMoney] = useState(1000)

    return (
        <div className="grandpa">

            <h2>Grandpa</h2>
            <p>Net Money: {money}</p>

            {/* value normal string, function, state etc set korte pari  */}
            {/* value array hisebe pathale receive korar somoy array hisebe receive receive korte hobe. and object hisebe pathale object hisebe receive korte hobe */}
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value="gold">
                    <section className="flex">
                        <Dad asset={asset}></Dad>
                        <Uncle asset={asset}></Uncle>
                        <Aunty></Aunty>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>

        </div>
    );
};

export default Grandpa;
/**
* 1) Create a context and export it
* 2) Add provider for the context wiht a value. value could be anything
* 3) useContext to acces value in the context API
*/