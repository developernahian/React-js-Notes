import PropTypes from 'prop-types';

const Sidebar = ({ recipeQueue }) => {
    console.log(recipeQueue);

    return (
        <div className="md:w-1/3 border-2 rounded-2xl text-gray-600 p-2 bg-base-100">
            <h2 className="border-b-2 pb-2 text-2xl font-semibold text-gray-800 text-center">Want To Cook: {recipeQueue.length}</h2>

            {/* Want to cook table */}
            <div className="overflow-x-auto">
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
                                        <button onClick={() => console.log('888888888888')} className="bg-green-400 rounded-full px-1 py-1 md:px-4 md:py-2 my-2  text-gray-800 font-medium">Preparing</button>
                                    </td>
                                </tr>

                            ))
                        }

                    </tbody>
                </table>
            </div>
            {/* Currently cooking table */}
        </div>
    );
};

Sidebar.propTypes = {
    recipeQueue: PropTypes.array.isRequired
};

export default Sidebar;