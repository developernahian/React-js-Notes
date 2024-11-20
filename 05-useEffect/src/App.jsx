
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [state, setState] = useState(0)


  // useEffect(()=>console.log("hello from useEffect"))
  //⬇️
  // useEffect(()=>{console.log("hello from useEffect")})
  //⬇️
  // useEffect(()=>{
  //   console.log("hello from useEffect")
  // })
  //⬇️
  // useEffect(()=>{
  //   console.log("hello from useEffect from useEffect")
  // },[])
  //⬇️
  useEffect(()=>{
    console.log("hello from useEffect")
  },[state])


  const handleState = () => {
    setState(state + 1)
  }
  

  return (
    <>
     
     <h2>This is State Count: {state} </h2>
     {/* <button onClick={() => setState(roll + 1)}>State Count</button> */}
     <button onClick={handleState}>State Count</button>


    </>
  )
}

export default App
