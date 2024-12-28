
import { useState } from 'react'
import './App.css'

import Footer from './Components/Footer'
import Header from './Components/Header'
import AvailablePlayers from './Components/AvailablePlayers'
import SelectedPlayers from './Components/SelectedPlayers'

import { toast } from 'react-toastify';

function App() {

  const [credit, setCredit] = useState(0)

  const [activeTab, setActiveTab] = useState('available')

  const [select, setSelect] = useState([])


  const handleIncreaseCredit = () => {
    setCredit(credit + 850000)
    toast.success('Credit Added to your Account', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  const handleClickActiveTab = (tab) => {
    setActiveTab(tab); // Update the state with the clicked // update by 'available' or 'selected'
  };

  const handleClickSelect = (player) => {
    if (select.length === 6) {
      toast.warn('You can not select more than 6 players', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return;
    }
    else if (credit < player.biddingPrice) {
      toast.error('Not enough money to buy this player. Claim Free Credit!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return;
    }
    else {

      const isExist = select.find(previousPlayer => previousPlayer.playerId === player.playerId)
      if (isExist) {
        toast.error('Player already selected', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        return;
      }
      else {
        const newSelect = [...select, player];
        setSelect(newSelect);

        toast.success(`Congrates !! ${player.name} is now in your squad`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });


        handleDecreaseCredit(player.biddingPrice)
      }


    }

  };
  // console.log(select.length);

  const handleDecreaseCredit = (biddingPrice) => {
      setCredit(credit - biddingPrice)
  }



  const handleDeletePlayer = (playerId) => {
    const newSelect = select.filter(player => player.playerId !== playerId);
    setSelect(newSelect);

    // delete er sathe sathe coin increase korte chaile nicher line CommentOut korte hobe.
    //and (playerId, player)  *player* arguement receive korte hobe SelectPlayer er button click theke
    // handleIncreaseCredit(player.biddingPrice);


    toast.warn('Player removed', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

  }





  return (
    <>

      <div className='w-11/12 mx-auto'>
        <Header
          handleIncreaseCredit={handleIncreaseCredit}
          credit={credit}
          handleClickActiveTab={handleClickActiveTab}
          activeTab={activeTab}

          selectLength={select.length}

        ></Header>

        {
          activeTab === 'available' && <AvailablePlayers handleClickSelect={handleClickSelect}></AvailablePlayers>
        }
        {
          activeTab === 'selected' && <SelectedPlayers selectPlayer={select} handleDeletePlayer={handleDeletePlayer} handleClickActiveTab={handleClickActiveTab}></SelectedPlayers>
        }

      </div>


      <Footer></Footer>
    </>
  )
}

export default App
