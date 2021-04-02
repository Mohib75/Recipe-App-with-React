import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

const App = () => {
	const APP_ID = "ed4eb201";
	const APP_KEY = "a0cda35b2096dd1a76bebe5005a7c465";

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("chicken");

	useEffect(() => {
		getRecipes();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query]);

	const getRecipes = async () => {
		const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
		const data = await response.json();
		setRecipes(data.hits);
	};

	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
		setSearch("");
	};

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};

	return (
		<div className='App'>
			<form onSubmit={getSearch} action='' className='search-form'>
				<input type='text' className='search-bar' value={search} onChange={updateSearch} />
				<button className='search-button' type='submit'>
					Search
				</button>
			</form>
			<div className='recipes'>
				{recipes.map((recipe) => (
					<Recipe
						key={recipe.recipe.label}
						title={recipe.recipe.label}
						calories={recipe.recipe.calories}
						image={recipe.recipe.image}
						ingredients={recipe.recipe.ingredients}
					/>
				))}
			</div>
		</div>
	);
};

export default App;
