import PropTypes from 'prop-types';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";

const Player = ({ player, handleClickSelect }) => {
    // console.log(player);


    return (
        <div>



            {/* ************************************************************* */}
            <div className="card bg-base-100 border-2 shadow-xl">
                <figure className='px-5 pt-5'>
                    <img
                        className="w-full  rounded-xl"
                        src={player.image}
                        alt={`Image of ${player.name}`} />
                </figure>

                {/* ---------------------------------- */}
                <div className="px-5 pt-6 pb-6">
                    {/* player name and icon */}
                    <div className='flex gap-4 items-center'>
                        <FaUser className='text-2xl' />
                        <h2 className="text-xl font-semibold">{player.name}</h2>
                    </div>

                    {/* country and role and icon */}
                    <div className='flex justify-between items-center pt-3'>
                        <div className='flex justify-between items-center gap-3'>
                            <FaFlag className='text-tertary text-lg' />
                            <p className='text-tertary'>{player.country}</p>
                        </div>

                        <div className='px-2 md:px-4 py-2  border bg-gray-200 border-none rounded-xl'>
                            <p className='text-sm text-center'>{player.role}</p>
                        </div>
                    </div>

                    {/* horizontal line */}
                    <hr className='mt-4 border-gray-300' />


                    {/* rating battingStyle bowlingStyle price and button */}
                    <div className='pt-4'>
                        <p className='font-bold'>Rating</p>
                        {/* Style */}
                        <div className='flex justify-between items-center  pt-4 pb-3'>
                            <p className='text-gray-700 text-sm md:text-base font-semibold'>{player.battingStyle}</p>
                            <p className='text-tertary text-sm md:text-base font-semibold'>{player.bowlingStyle}</p>

                        </div>
                        {/* price and button */}
                        <div className='flex justify-between items-center'>
                            <p className='font-semibold text-sm md:text-base'>Price: &#36;{player.biddingPrice}</p>
                            <button onClick={() => handleClickSelect(player)} className='px-3 md:px-6 py-1 md:py-2 rounded-xl border-gray-400 border-2 font-semibold  hover:bg-[#E7FE29] hover:border-[#E7FE29] hover:font-bold'>Select</button>

                        </div>
                    </div>


                </div>
                {/* ---------------------------------- */}




            </div>
            {/* ****************************************************************************** */}



        </div>
    );
};


Player.propTypes = {

    player: PropTypes.object.isRequired,
    handleClickSelect: PropTypes.func.isRequired,


}

export default Player;