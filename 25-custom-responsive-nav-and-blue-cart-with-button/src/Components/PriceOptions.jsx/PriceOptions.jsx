
import { IoIosCheckmarkCircle } from "react-icons/io";


const PriceOptions = () => {


    // chatgpt prompt
    // i need some json data that will have price options for my gym. provide id, realistic price option, name also add features for each price options.
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Plan",
            "price": 25,
            "features": [
                "Access to gym equipment",
                "Locker room facilities",
                "Free Wi-Fi"
            ]
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "price": 50,
            "features": [
                "Access to gym equipment",
                "Locker room facilities",
                "Group fitness classes",
                "Personalized training schedule",
                "Free Wi-Fi"
            ]
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "price": 75,
            "features": [
                "Access to gym equipment",
                "Locker room facilities",
                "Unlimited group fitness classes",
                "Personal training sessions",
                "Nutrition guidance",
                "Priority customer support",
                "Free Wi-Fi"
            ]
        },
        {
            "id": 4,
            "name": "Elite Plan",
            "price": 100,
            "features": [
                "Access to gym equipment",
                "Locker room facilities",
                "All group fitness classes",
                "Unlimited personal training sessions",
                "Nutrition and lifestyle coaching",
                "Complimentary gym merchandise",
                "Access to VIP lounge",
                "Priority customer support",
                "Free Wi-Fi"
            ]
        }
    ]


    return (
        <div>
            <h2 className="text-5xl text-center py-5" >Best Prices in the town</h2>

            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {
                    priceOptions.map(option =>
                        <div className='bg-blue-500 rounded-xl p-5 text-white flex flex-col' key={option.id}>


                            <h2 className="text-center">
                                <span className='text-4xl'>Price {option.price}</span>
                                <span className='text-2xl'>/mon</span>
                            </h2>



                            <h4 className='text-3xl'>{option.name}</h4>



                            <div className="mt-3 pl-5 flex-grow">
                                {
                                    option.features.map((feature, index) =>
                                        <div key={index} className="flex items-center gap-2 ">

                                            <IoIosCheckmarkCircle />  <span>{feature}</span>
                                        </div>)
                                }
                            </div>

                            {/* button*/}
                            <div className="w-full flex justify-center items-center">
                                <button className="mt-12 bg-green-700 w-20 py-2">But Now</button>
                            </div>






                        </div>)

                }
            </div>

        </div>
    );
};

export default PriceOptions;