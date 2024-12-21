
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Header from './Components/Header'
import OurRecipes from './Components/OurRecipes'
import Recipes from './Components/Recipes'
import Sidebar from './Components/Sidebar'

function App() {

  const [recipeQueue, setRecipeQueue] = useState([])

  const addRecipeToQueue = (recipe) => {
    // console.log(recipe);
    const isExist = recipeQueue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id)
    if (!isExist) {
      setRecipeQueue([...recipeQueue, recipe])
    }
    else {
      alert('Recipe already exist in the queue');
    }
  }
  console.log(recipeQueue);


  return (
    <>
      <div className='w-11/12 mx-auto'>
        {/* Header */}
        <Header></Header>
        {/* Banner */}
        <Banner></Banner>
        {/* OurRecipes */}
        <OurRecipes></OurRecipes>


        {/* Recipies and sidebar section */}
        <section className='flex flex-col md:flex-row gap-6'>
          {/* Recipes */}
          <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>
          {/* Sidebar */}
          <Sidebar recipeQueue={recipeQueue}></Sidebar>
        </section>
      </div>


    </>
  )
}

export default App






