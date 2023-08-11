import React from 'react'
import classes from './Card.module.css'
const CardsRecipe = (props) => {
  return (
    <div className={classes.card}>
        <div>
            <h5>FOOD TITLE:{props.title}</h5>
        </div>
        <div className={classes.recipeImg}>
            <img src={props.image} alt='pic'/>
        </div>
        <div>
            <h6>INGREDIENTS</h6>
            <p> Calories: {props.calories}</p>
            <p> Carbohydrates: {props.carbs}</p>
            <p> Fats: {props.fat}</p>
            <p> Protein: {props.protein}</p>
        </div>
    </div>
  )
}

export default CardsRecipe
