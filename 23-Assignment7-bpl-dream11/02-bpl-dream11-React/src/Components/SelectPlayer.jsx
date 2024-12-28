import PropTypes from 'prop-types';
import { RiDeleteBin6Line } from "react-icons/ri";

const SelectPlayer = ({ selectPlayer, handleDeletePlayer }) => {



    return (
        <div>
            {/* card */}
            <div className='flex items-center justify-between  border border-gray-300 rounded-xl p-4'>

                {/* left */}
                <div className='flex items-center gap-4'>

                        <img className='rounded-xl object-cover w-20 h-20' src={selectPlayer.image} alt={`Image of ${selectPlayer.name}`}></img>


                    <div>
                        <p className='font-semibold text-lg md:text-xl'>{selectPlayer.name}</p>
                        <p className='text-secondary md:text-lg font-medium'>{selectPlayer.role}</p>
                        <p className='text-teritary md:text-lg font-medium'>&#36;{selectPlayer.biddingPrice}</p>
                    </div>
                </div>



                {/* right */}
                <button onClick={() => handleDeletePlayer(selectPlayer.playerId, selectPlayer)}><RiDeleteBin6Line className='text-red-500 text-2xl' /></button>


                {/* player delete er sathe sathe coin increase korte chaile selectPlayer pass kore App.jsx er last line commentOut korlei kaz hobe.. tar age upofer delete comment kore nicher delete commentOut korte hobe */}
                {/* <div>
                    <button onClick={() => handleDeletePlayer(selectPlayer.playerId, selectPlayer)}><RiDeleteBin6Line className='text-red-500 text-xl'/></button>
                </div> */}

            </div>




                        




        </div>
    );
};


SelectPlayer.propTypes = {
    selectPlayer: PropTypes.object.isRequired,
    handleDeletePlayer: PropTypes.func.isRequired



}

export default SelectPlayer;