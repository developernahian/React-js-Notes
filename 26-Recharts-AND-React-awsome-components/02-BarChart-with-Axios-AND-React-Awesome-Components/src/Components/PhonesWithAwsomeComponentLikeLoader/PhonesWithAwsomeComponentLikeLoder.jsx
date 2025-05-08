import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { useEffect, useState } from "react";
import { Audio, RotatingLines } from 'react-loader-spinner'


const PhonesWithAwsomeComponentLikeLoader = () => {

    // api from github
    // https://github.com/ProgrammingHero1/broken-phone
    // then select Exapmple API

    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
       
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
                console.log(phoneWithFakeData);//Array(15)
                setPhones(phoneWithFakeData);
                setLoading(false);// data load hole false. 

            })



    }, [])
    



    return (
        <div>
           
           {/* data load hoye gele false. so load howar por loader dekhabe na */}
            {loading &&
                <div>
                    <Audio
                        height="80"
                        width="80"
                        radius="9"
                        color="green"
                        ariaLabel="three-dots-loading"
                        wrapperStyle
                        wrapperClass
                    />

                    <RotatingLines
                        visible={true}
                        height="96"
                        width="96"
                        color="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        ariaLabel="rotating-lines-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
            }
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

export default PhonesWithAwsomeComponentLikeLoader;