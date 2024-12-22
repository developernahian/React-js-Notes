import { useEffect, useState } from "react";
import PropTypes from 'prop-types';


const Recipes = ({addRecipeToQueue}) => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    // console.log(recipes);


    return (
        <div className="md:w-2/3">
            Recipes Length: {recipes.length}

            {/* {
                recipes.map(recipe=>())
            } */}

            {/* {
                recipes.map(recipe => (
                    <p key={recipe.id}>{recipe.recipe_name}</p>
                ))
            } */}


            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">

            </div> */}

            {/* ************ 1col 2col er jonno grid*************Start************************* */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* map */}
                {
                    recipes.map(recipe => (

                        //from daisyUI start
                        <div key={recipe.recipe_id} className="card bg-base-100 border-2">
                            <figure className="px-8 pt-6 ">
                                <img
                                    className="w-full md:h-52 rounded-xl"
                                    src={recipe.recipe_image}
                                    alt={`Img of ${recipe.recipe_name}`} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl text-gray-800 font-semibold">{recipe.recipe_name}</h2>
                                <p className="text-gray-600 text-base">{recipe.short_description}</p>

                                <hr className="m-3 border-gray-400"></hr>

                                <h3 className="text-lg text-gray-800 font-medium">Ingredients: {recipe.ingredients.length}</h3>

                                <ul className="list-disc ml-8 text-gray-600">

                                    {/* ingredients er list er sojjo again map */}
                                    {/* {recipe.ingredients.map((item, index) =>   (<li key={index}>{intem}</li>)   )} */}

                                    {
                                        recipe.ingredients.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))
                                    }
                                </ul>

                                <hr className="m-3 border-gray-400"></hr>




                                {/* time and calories start */}
                                <div className="flex gap-4">
                                    <div className="flex items-center">
                                        <i className="fa-regular fa-clock mr-2 text-2xl"></i>
                                        <p>{recipe.preparing_time} minute.</p>
                                    </div>

                                    <div className="flex items-center">
                                        <i className="fa-solid fa-fire-flame-curved mr-2 text-2xl"></i>
                                        <p>{recipe.calories} calories.</p>
                                    </div>

                                </div>
                                {/* time and calories end */}




                                <div className="card-actions">
                                    <button onClick={() => addRecipeToQueue(recipe)} className="btn bg-green-400 rounded-full px-8 text-xl text-gray-800 mt-6 font-medium">Want To Cook</button>
                                </div>


                            </div>
                        </div>
                        //from daisyUI end

                    ))
                }

            </div>
            {/* *************************End************************* */}


        </div>
    );
};





Recipes.propTypes = {
    addRecipeToQueue: PropTypes.func.isRequired
};

export default Recipes;