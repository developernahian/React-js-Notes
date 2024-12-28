import logoFooter from '../assets/images/logo-footer.png'
import bgShadow from '../assets/images/bg-shadow.png'

const Footer = () => {
    return (
        <footer className='mt-60 md:mt-80 relative'>


            {/* ***************************** Subscribe to our Newsletter section Start ***************************** */}

            <section className='absolute left-0 right-0 -top-36 md:-top-48 bg-white bg-opacity-20 w-11/12 mx-auto border-2 rounded-xl p-3 md:p-5'>
                <div
                    style={{
                        backgroundImage: `url(${bgShadow})`,
                        backgroundColor: 'white',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                    className="flex flex-col justify-center items-center rounded-xl pt-10 md:pt-20 pb-10 md:pb-20">

                    <h3 className="text-xl md:text-3xl font-semibold text-center">Subscribe to our Newsletter</h3>
                    <p className="font-inter text-sm md:text-xl font-medium text-secondary text-center pt-2 md:pt-4 pb-4 md:pb-6">Get the latest updates and news right in your inbox!</p>




                    <div className=''>
                        <input type="text" placeholder='Enter your email' className='text-tertary text-sm md:text-base border-2 border-gray-300 rounded-xl w-36 md:w-96 h-11 md:h-14 pl-3 md:pl-7' />
                        <button className='bg-white_primary text-sm md:text-base text-[#040D11]  bg-gradient-to-r from-[#dcc192] via-[#f7cb73] to-[#e37993]  rounded-xl h-11 md:h-14 px-2 md:px-6 ml-2 md:ml-4 font-bold'>Subscribe</button>
                    </div>




                </div>
            </section>


            {/* ***************************** Subscribe to our Newsletter section End ***************************** */}






            {/* black section ****************************************** */}
            <section className="bg-[#06091A]">

                {/* logo*********************************************** */}
                <div className='flex justify-center pt-40 md:pt-56'>
                    <img src={logoFooter} alt="Footer Logo" className="w-36" />
                </div>



                {/* left center middle ************************************* */}
                <div className='flex flex-col md:flex-row justify-between gap-10 w-11/12 mx-auto pt-11 md:pt-16'>
                    {/* left */}
                    <div className=' justify-start'>
                        <h5 className='text-white text-lg font-semibold pb-2 md:pb-4'>About Us</h5>
                        <p className='text-white_teritary leading-7'>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                    </div>
                    {/* Center */}
                    <div className=''>
                        <h5 className='text-white text-lg font-semibold pb-2 md:pb-4'>Quick Links</h5>
                        <ul className='list-disc text-white_teritary pl-8 space-y-2'>
                            <li><a href="">Home</a></li>
                            <li><a href="">Fixture</a></li>
                            <li><a href="">Teams</a></li>
                            <li><a href="">Schedules</a></li>
                        </ul>
                    </div>
                    {/* right */}
                    <div className=''>
                        <h5 className='text-white text-lg font-semibold pb-2 md:pb-4'>Suscribe</h5>
                        <p className='text-white_teritary leading-7'>Subscribe to our newsletter for the <br /> latest updates.</p>


                        <div className='flex justify-center pt-5'>
                            <div >
                                <input type="text" placeholder='Enter your email' className='text-tertary border-none rounded-l-xl h-11 w-40 pl-3' />
                                <button className='bg-white_primary text-[#040D11]  bg-gradient-to-r from-[#dcc192] via-[#f7cb73] to-[#e37993]  rounded-r-xl h-11 px-3 md:px-6 font-semibold md:font-bold'>Subscribe</button>
                            </div>
                        </div>

                    </div>


                </div>

                {/* hr and copyright ******************************* */}

                <div className='w-11/12 mx-auto mt-16'>
                    <hr className='border-gray-600' />
                    <p className='text-white_teritary text-center py-5'>@2024 All Rights Reserved By Nahian</p>
                </div>




            </section>







        </footer>
    );
};

export default Footer;