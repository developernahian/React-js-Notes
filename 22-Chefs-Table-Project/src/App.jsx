
import './App.css'
import Banner from './Components/Banner'
import Header from './Components/Header'
import OurRecipes from './Components/OurRecipes'

function App() {


  return (
    <>
      <div className='w-11/12 mx-auto'>
        {/* Header */}
        <Header></Header>
        {/* Banner */}
        <Banner></Banner>
        {/* OurRecipes */}
        <OurRecipes></OurRecipes>
      </div>


    </>
  )
}

export default App






