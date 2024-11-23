
import { useState } from 'react';
import './App.css'
import Service from './Service';

function App() {
  
  

  const [status, setStatus] = useState()
  console.log('A',status);
  

  const transfer = (message) => {
    // console.log('B',message+1);
    console.log('B',message);
    setStatus(message)
    
  }
//PROBLEM: why A not update? with props



  return (
    <>
      
      <Service transferProps={transfer} />


    </>
  )
}

export default App
