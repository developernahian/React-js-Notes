import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'



const Countries = () => {
    const [countries, setCountries] = useState([]);

    // useEffect(() => {}, []);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setCountries(data))
    }, []);

    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    return (
        <div >
            <h2>Total countries: {countries.length}</h2>


            <div className="country-container">
            {
                countries.map(country=><Country key="country.ccn3" country={country}></Country>)
            }
            </div>


            
        </div>
    );
};

export default Countries;