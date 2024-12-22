import PropTypes from 'prop-types';

const Sidebar = ({ recipeQueue, handleRemove, preparedRecipe, calculateTimeAndCalories, totalTime, totalCalories }) => {
    // console.log(recipeQueue);

    return (
        <div className="md:w-1/3 border-2 rounded-2xl text-gray-600 p-2 bg-base-100">


            {/* Want to cook table****************************************************************** */}
            <div className="overflow-x-auto">
                <h2 className="border-b-2 pb-2 text-2xl font-semibold text-gray-800 text-center">Want To Cook: {recipeQueue.length}</h2>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*    recipeQueue.map((recipe, index) =>   (.......)   )    */}
                        {
                            recipeQueue.map((recipe, index) => (

                                <tr key={index} className="hover">
                                    <th>{index + 1}</th>
                                    <td>{recipe.recipe_name}</td>
                                    <td>{recipe.preparing_time} minutes</td>
                                    <td>{recipe.calories} calories</td>
                                    <td>
                                        <button onClick={() => {
                                            handleRemove(recipe.recipe_id)
                                            calculateTimeAndCalories(recipe.preparing_time, recipe.calories)
                                        }}
                                            className="bg-green-400 rounded-full px-1 py-1 md:px-4 md:py-2 my-2  text-gray-800 font-medium">Preparing</button>
                                    </td>
                                </tr>

                            ))
                        }

                    </tbody>
                </table>
            </div>



            {/* Currently cooking table ########################################################## */}
            <div className="overflow-x-auto mt-8">
                <h2 className="border-b-2 pb-2 text-2xl font-semibold text-gray-800 text-center">Currently Cooking: {preparedRecipe.length}</h2>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*    preparedRecipe.map((recipe, index) =>   (.......)   )    */}
                        {
                            preparedRecipe.map((recipe, index) => (

                                <tr key={index} className="hover">
                                    <th>{index + 1}</th>
                                    <td>{recipe.recipe_name}</td>
                                    <td>{recipe.preparing_time} minutes</td>
                                    <td>{recipe.calories} calories</td>
                                </tr>

                            ))
                        }

                        {/* sum of time and calories */}
                        <tr className='border-none'>
                            <td></td>
                            <td></td>
                            <td>Total Time = {totalTime}</td>
                            <td>Total Calories =  {totalCalories}</td>
                        </tr>

                    </tbody>
                </table>
            </div>


        </div>
    );
};

Sidebar.propTypes = {
    recipeQueue: PropTypes.array.isRequired,
    handleRemove: PropTypes.func.isRequired,
    preparedRecipe: PropTypes.array.isRequired,
    calculateTimeAndCalories: PropTypes.func.isRequired,
    totalTime: PropTypes.number.isRequired,
    totalCalories: PropTypes.number.isRequired
};

export default Sidebar;