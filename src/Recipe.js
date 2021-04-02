import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
	return (
		<div className={style.recipe}>
			<h1>{title}</h1>
			<ul>
				<h3>Ingredeients:</h3>
				{ingredients.map((ingredient) => (
					<li>{ingredient.text}</li>
				))}
			</ul>
			<p>
				<h3>Calories:</h3>
				{calories}
			</p>
			<img className={style.image} src={image} alt='' />
		</div>
	);
};

export default Recipe;
