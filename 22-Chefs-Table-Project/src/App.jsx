
import './App.css'
// import Banner from './Components/Banner'
import Header from './Components/Header'
// import OurRecipes from './Components/OurRecipes'
import Recipes from './Components/Recipes'
import Sidebar from './Components/Sidebar'

function App() {


  return (
    <>
      <div className='w-11/12 mx-auto'>
        {/* Header */}
        <Header></Header>
        {/* Banner */}
        {/* <Banner></Banner> */}
        {/* OurRecipes */}
        {/* <OurRecipes></OurRecipes> */}


        {/* Recipies and sidebar section */}
        <section className='flex flex-col md:flex-row gap-6'>
          {/* Recipes */}
          <Recipes></Recipes>
          {/* Sidebar */}
          <Sidebar></Sidebar>
        </section>
      </div>


    </>
  )
}

export default App






