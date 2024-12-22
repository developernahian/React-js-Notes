
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Header from './Components/Header'
import OurRecipes from './Components/OurRecipes'
import Recipes from './Components/Recipes'
import Sidebar from './Components/Sidebar'

function App() {

  const [recipeQueue, setRecipeQueue] = useState([])
  const [preparedRecipe, setPreparedRecipe] = useState([])
  const [totalTime, setTotalTime] = useState(0)
  const [totalCalories, setTotalCalories] = useState(0)

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
  // console.log(recipeQueue);




  // const handleRemove = (id) => { 
  //   const updatedQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id);
  //   const deletedRecipe = recipeQueue.find(recipe => recipe.recipe_id === id);
  
  //   setRecipeQueue(updatedQueue);
  
  //   if (deletedRecipe) {
  //     setPreparedRecipe([...preparedRecipe, deletedRecipe]);
  //   }
  // };
  // console.log(preparedRecipe);
// OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR
  const handleRemove = (id) => {
    // find which recipe to remove
    const deletedRecipe = recipeQueue.find(recipe => recipe.recipe_id === id)
    // remove from want to cook table
    const updatedQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id)
    setRecipeQueue(updatedQueue)
    // add to currently cooking table
    setPreparedRecipe([...preparedRecipe, deletedRecipe])

  }
  console.log(preparedRecipe);


  



// json data string na hoye number ache tai parseInt use na kore direct add korechi
  const calculateTimeAndCalories = (time, calories) => {
    setTotalTime(totalTime + time)
    setTotalCalories(totalCalories + calories)
  }


//Json data jodi emon number "preparing_time": 30 na hoye "preparing_time": "30" string  hoy tahole parseInt(time, 10) or +time use korte hobe..
// 2 ta way niche dewa ache. ei code er json data number ache tai direct use korechi. parseInt korar dorkar hoyni
//   const calculateTimeAndCalories = (time, calories) => {
//     setTotalTime((prevTotalTime) => prevTotalTime + parseInt(time, 10));
//     setTotalCalories((prevTotalCalories) => prevTotalCalories + parseInt(calories, 10));
// };
//   parseInt(time, 10): Converts time from a string to a number (base 10).
// parseInt(calories, 10): Converts calories from a string to a number (base 10).
// Using prevTotalTime and prevTotalCalories ensures state updates are based on the latest values.
// OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR 
// const calculateTimeAndCalories = (time, calories) => {
//   setTotalTime(prev => prev + +time);
//   setTotalCalories(prev => prev + +calories);
// };
// +time and +calories: The unary + operator converts strings to numbers.
// Shortens the arrow function by omitting explicit parameter names for the previous state.



  
  

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
          <Sidebar recipeQueue={recipeQueue} handleRemove={handleRemove} preparedRecipe={preparedRecipe} calculateTimeAndCalories={calculateTimeAndCalories} totalTime={totalTime} totalCalories={totalCalories}></Sidebar>
        </section>
      </div>


    </>
  )
}

export default App






