


import './Sunglass.css'// same folder er moddhe import
import Watch from '../Watch/Watch'; // ak level upore -> Watch Folder -> Watch.jsx // .jsx na dileo hoy

// Single import
import add from '../../Utils/calculateSingle'; //(add function re call korechi) // 2 level upore -> Utils Folder -> calculateSingle.js .jsx na dileo hoy
// Multiple import
import { devide, subtract, multiply } from '../../Utils/calculateMultiple'; //(devide, substract, multiply function re call korechi) // 2 level upore -> Utils Folder -> calculateSingle.js .jsx na dileo hoy






const Sunglass = () => {

    const first = 55
    const second = 66


    // add function call from calculateSingle.js
    const sumResult = add(first, second); // 2 level upore Utils folder er moddhe calculateSingle.jsx file e add function re call korechi...
    console.log('add: ',sumResult);//121


    // devide, subtract, multiply function call from calculateMultiple.jx
    const devideResult = devide(first, second)
    console.log('devide: ', devideResult);
    const subtractResult = subtract(first, second)
    console.log('subtract: ', subtractResult);
    const multiplyResult = multiply(first, second)
    console.log('multiply: ', multiplyResult);
    
    

    return (
        <div>
            <h2>This is Sunglass</h2>

            <h3>Sum: {sumResult}</h3>
            {/* UI output-> Sum: 212 */}

            <h3>Devide: {devideResult}</h3>
            {/* UI output-> Devide: 0.8333333333333334 */}

            <h3>Subtract: {subtractResult}</h3>
            {/* UI output-> Subtract: -11 */}

            <h3>Multiply: {multiplyResult}</h3>
            {/* UI output-> Multiply: 3300 */}

            <Watch></Watch>
        </div>
    );
};

export default Sunglass;