import { useState } from 'react';
import './Country.css'

const Country = ({country}) => {
    // console.log(country);
    const {name, flags, population, area, cca3} = country

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
        // sisited er initial value false. every click e visited er value true false change hobe
    }

    return ( 
        <div className={`country ${visited && 'visited-css'}` }>
            {/* <h3>name: {name?.common}</h3> */}
            <h3 style={{color: visited ? 'green' : 'red'}}>name: {name.common}</h3>
            <h3>Official name: {name.official}</h3>
            <img src={flags.png} alt="flag" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>


            <button onClick={handleVisited}>{visited ? 'VISITED' : 'NOT VISITED'}</button>
            {visited ? 'visited' : 'not visited'}

        </div>
    );
};

export default Country;