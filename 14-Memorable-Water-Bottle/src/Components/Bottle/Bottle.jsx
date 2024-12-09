import './Bottle.css';

const Bottle = ({bottle}) => {
    console.log(bottle);
    
    return (
        <div className='bottle'>
            <h3>Bottle Name: {bottle.name}</h3>
            <img src={bottle.img} alt="Bottle" />
            <p>Price: ${bottle.price}</p>
            
            <p>Stock: {bottle.stock}</p>
        </div>
    );
};

export default Bottle;