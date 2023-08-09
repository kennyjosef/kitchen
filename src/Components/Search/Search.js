import React from 'react'
// import axios from 'axios'
import classes from './Search.module.css'
import Button from '../Button/Button'
const Search = () => {
    // const getRecipe =()=>{
    //     axios.get("https://api.spoonacular.com/recipes/complexSearch")
    //     .then(res =>{
    //         console.log(res)
    //     })
    //     .catch( error =>{
    //         console.log(error)
    //     })
    // }
    // getRecipe()
  return (
    <div className={classes.searchSection}>
      <h4>Search Our Special Dish</h4>
      {/* <Button  onClick={getRecipe}name="Get Recipe"/> */}
    </div>
  )
}

export default Search
