import { useEffect, useState } from "react";
import Player from "./Player";
import PropTypes from 'prop-types';


const AvailablePlayers = ({ handleClickSelect }) => {

    const [players, setPlayers] = useState([]);



    useEffect(() => {
        fetch('/players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])
    // console.log(players.length);//output: 15




    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
                {
                    players.map(player => <Player key={player.playerId} player={player} handleClickSelect={handleClickSelect}></Player>)
                }
            </div>

        </div>
    );
};


AvailablePlayers.propTypes = {

    handleClickSelect: PropTypes.func.isRequired,


}

export default AvailablePlayers;