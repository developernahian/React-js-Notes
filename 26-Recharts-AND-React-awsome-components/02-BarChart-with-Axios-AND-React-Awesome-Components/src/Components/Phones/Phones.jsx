import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { useEffect, useState } from "react";


const Phones = () => {

    // api from github
    // https://github.com/ProgrammingHero1/broken-phone
    // then select Exapmple API

    const [phones, setPhones] = useState([]);
    useEffect(() => {
        //11111111111111111111111111
        // Use fetch
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(res => res.json())
        //     .then(data => setPhones(data.data))

        // OR OR OR OR OR OR OR OR (api structure e object er moddhe data namee array er moddhe object ache. tai extra akta data likhte hoyeche. and axios nize akta data name object make kore tai asios e extra arekta data likhte hoyeche. )
        //          {
        //              data: [
        //                  {
        //                      object
        //                  },
        //                  {
        //                      object
        //                  },
        //                  {
        //                      object
        //                  },
        //              ]
        //          }




        // 222222222222222222222222222222
        // Use axios
        // axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(data => setPhones(data.data.data))





        // 3333333333333333333333333333333333333333333333
        // Use axios // but slug: abcde_efg_14500 ei formate theke price alada korar jonno split use korechi
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            // .then(data => {setPhones(data.data.data)})
            .then(data => {
                const phoneData = data.data.data;
                const phoneWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])

                    }
                    return obj;
                })
                setPhones(phoneWithFakeData);
                console.log(phoneWithFakeData);//Array(15)

            })



    }, [])
    // console.log(phones);


    // console.log(phones);




    return (
        <div>
            {/* 1111111111111111111111111111 */}
            {/* use fetch */}
            {/* <h2>Phones: {phones.length}</h2> */}

            {/* OR OR OR OR OR OR OR OR */}

            {/* 222222222222222222222222222222 */}
            {/* use asios */}
            {/* <h2 className="text-4xl">Phones: {phones.length}</h2> */}



            {/* 33333333333333333333333333333333333333333 */}
            {/* use asios */}
            <h2 className="text-4xl">Phones: {phones.length}</h2>

            {/* XAsis data er nam sob show na korle width barate hobe. tahole show korbe */}
            <BarChart width={600} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </BarChart>


        </div>
    );
};

export default Phones;