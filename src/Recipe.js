import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients, index }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{`${index + 1} ${title}`}</h1>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <h2 className="calories">{Math.floor(calories)} Calories</h2>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;
