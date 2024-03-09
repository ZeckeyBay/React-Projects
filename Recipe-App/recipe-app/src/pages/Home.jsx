import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';

const APP_ID = 'eda809a4';
const APP_KEY = 'f27038a774162cb47efcd98e436fc6f7';

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('');
    const [meal, setMeal] = useState('');
    const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'TeaTime'];

    useEffect(() => {
        const getMeals = async () => {
            try {
                let url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

                if (meal) {
                    url += `&mealType=${meal.toLowerCase()}`;
                }

                const response = await axios.get(url);
                setRecipes(response.data.hits);
            } catch (error) {
                console.log('Error fetching', error);
            }
        };
        getMeals();
    }, [query, meal]);

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center my-8 dark:text-white">Recipe Search App</h1>
            <SearchBar setQuery={setQuery} />
            <div className="flex justify-center">
                {mealTypes.map((mealType, index) => (
                    <button
                        key={index}
                        className={`mx-2 px-4 py-2 rounded-md ${meal === mealType.toLowerCase() ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                        onClick={() => setMeal(mealType.toLowerCase())}
                    >
                        {mealType}
                    </button>
                ))}
            </div>
            <RecipeList recipes={recipes} />
        </div>
    );
};

export default Home;
