import Friend from "../Friend/Friend";
import Special from "../Special/Special";


const Cousin = ({name, asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>

            <section className="flex">

            {/* je cousin asset pabe shei cousin er special kew ache */}
            {
                asset && <Special asset={asset}></Special>
            }


            {
                name === 'Hira' && <Friend asset={asset}></Friend>
            }

            {/* Cousin oneke ache. but je cousin er nam "Hira" only tar fieend acne. */}
            
            </section>
        </div>
    );
};

export default Cousin;

// ei page e context api use kora hoyni. normal props drilling