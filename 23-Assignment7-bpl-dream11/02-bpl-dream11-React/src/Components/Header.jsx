import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../assets/images/logo.png';
import coin from '../assets/images/coin.png';
import bgShadow from '../assets/images/bg-shadow.png';
import bannerMain from '../assets/images/banner-main.png';
import PropTypes from 'prop-types';

const Header = ({ handleIncreaseCredit, credit, handleClickActiveTab, activeTab, selectLength }) => {




    return (
        <div>


            {/*TODO: ***************************** Navbar Start ***************************** */}

            <nav className="navbar     bg-white/50 backdrop-blur-xl fixed top-0 z-50 w-11/12 mx-auto .
              ">

                {/* Logo */}
                <div className="flex-1 lg:flex-none">
                    <img src={logo} alt="logo" className=" w-16 md:w-20" />
                </div>

                {/* Dropdown menu for small screens */}
                <div className="flex flex-1 justify-end px-2">
                    <div className="flex items-stretch">

                        <div className="md:hidden dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">

                                <GiHamburgerMenu className="text-2xl" />
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-40 p-2 shadow absolute left-3">
                                <li><a>Home</a></li>
                                <li><a>Fixture</a></li>
                                <li><a>Teams</a></li>
                                <li><a>Schedules</a></li>
                            </ul>
                        </div>




                        {/* Desktop menu */}
                        <div className="hidden md:block">
                            <ul className='h-full flex items-center  space-x-12 text-secondary'>
                                <li>
                                    <a href="" className=''>Home</a>
                                </li>

                                <li>
                                    <a href="" className=''>Fixture</a>
                                </li>

                                <li>
                                    <a href="">Teams</a>
                                </li>
                                <li>
                                    <a href="">Schedules</a>
                                </li>
                            </ul>

                        </div>




                        <div className="border-2 rounded-xl px-5 py-2 md:py-4 flex justify-center items-center md:ml-12 space-x-2 md:space-x-3 text-[15px] md:text-[16px]">
                            <p className="">{credit}</p>
                            <p>Coin</p>
                            <img src={coin} alt='coin' />
                        </div>


                    </div>
                </div>

            </nav>

            {/* ***************************** Navbar End ***************************** */}





            {/*TODO: ***************************** Banner Start ***************************** */}

            <section
                style={{
                    backgroundImage: `url(${bgShadow})`,
                    backgroundColor: 'black',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                className="mt-24 md:mt-28 flex flex-col justify-center items-center rounded-xl">


                <img src={bannerMain} alt="img" className="w-66 mt-12" />
                <p className="text-white_primary text-center text-lg md:text-3xl lg:text-[42px] pt-6 pb-4">Assemble Your Ultimate Dream 11 Cricket Team</p>
                <p className="text-white_secondary text-center text-base md:text-2xl">Beyond Boundaries Beyond Limits</p>

                <div className="border-2 rounded-xl border-[#E7FE29] px-2 py-2 hover:border-yellow-500 mt-6 mb-12">
                    <button onClick={() => handleIncreaseCredit()} className="btn font-bold bg-[#E7FE29] hover:bg-yellow-500">Claim Free Credit</button>
                </div>

            </section>

            {/* ***************************** Banner End ***************************** */}



            {/* TODO: ************** Toggle Button Start with Status Satrt ***************** */}

            <section className="flex flex-col md:flex-row justify-between items-center py-5 px-3 mt-5 mb-8 md:mt-10 gap-3 rounded-xl">
                {/* left */}
                <div>
                    {
                        activeTab === 'available' ? (
                            <div>
                                <p className="text-xl md:text-2xl font-bold">Available Players</p>
                            </div>
                        ) : (
                            <div>
                                <p className="text-xl md:text-2xl font-bold">Selected Players ({selectLength}/6)</p>
                            </div>
                        )
                    }
                </div>
                {/* right */}
                <div className="border-2 border-gray-300 rounded-xl">
                    <button style={{
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        paddingTop: '10px',
                        paddingBottom: '10px',
                        fontWeight: 'bold',
                        borderRadius: '10px 0 0 10px',
                        // top-left top-right bottom-right bottom-left

                        backgroundColor: activeTab === 'available' ? '#E7FE29' : 'white',
                        color: activeTab === 'available' ? 'black' : 'rgba(19, 19, 19, 0.6)',

                    }}
                        onClick={() => handleClickActiveTab('available')}

                    >Available </button>

                    <button style={{
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        paddingTop: '10px',
                        paddingBottom: '10px',
                        fontWeight: 'bold',
                        borderRadius: '0 10px 10px 0',
                        // top-left top-right bottom-right bottom-left

                        backgroundColor: activeTab === 'selected' ? '#E7FE29' : 'white',
                        color: activeTab === 'selected' ? 'black' : 'rgba(19, 19, 19, 0.6)',

                    }}

                        onClick={() => handleClickActiveTab('selected')}

                    >Selected ({selectLength})</button>
                </div>


            </section>

            {/* style or className*/}
            {/* className={`${activeTab === 'available' ? '' : ''}`} */}

            {/* ********** Toggle Button End with Status End ************** */}






        </div>
    );
};



Header.propTypes = {

    handleIncreaseCredit: PropTypes.func.isRequired,
    credit: PropTypes.number.isRequired,

    handleClickActiveTab: PropTypes.func.isRequired,
    activeTab: PropTypes.string.isRequired,

    selectLength: PropTypes.number.isRequired,


}



export default Header;