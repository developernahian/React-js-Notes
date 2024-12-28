import PropTypes from 'prop-types';
import SelectPlayer from './SelectPlayer';

const SelectedPlayers = ({ selectPlayer, handleDeletePlayer, handleClickActiveTab }) => {


    return (
        <div>

            {/* start */}
            {
                selectPlayer.length === 0 ? <h1 className='text-xl md:text-2xl font-semibold text-center leading-8'>No players selected yet <br/> ¯\_(ツ)_/¯  </h1> : ''
            }
            {/* end */}



            <div className='flex flex-col gap-3'>
                {
                    selectPlayer.map(selectPlayer => <SelectPlayer key={selectPlayer.playerId} selectPlayer={selectPlayer} handleDeletePlayer={handleDeletePlayer}></SelectPlayer>)
                }
            </div>




            {/* ********************** */}
            {/* Available Players Button */}
            <div className="mb-4 mt-8">
                
                <button
                    onClick={() => handleClickActiveTab('available')}
                    className=" bg-[#E7FE29] hover:bg-yellow-300 font-bold py-2 px-4 rounded-xl border-2 border-[#E7FE29] hover:border-yellow-500"
                >
                    Add More Player
                </button>
            </div>
            {/*  **************** */}

        </div>
    );
};


SelectedPlayers.propTypes = {

    selectPlayer: PropTypes.array.isRequired,
    handleDeletePlayer: PropTypes.func.isRequired,

    handleClickActiveTab: PropTypes.func.isRequired



}



export default SelectedPlayers;