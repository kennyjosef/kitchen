import React, { useEffect, useState } from 'react'
import axios from 'axios'
import classes from './Search.module.css'
import Button from '../Button/Button'
import CardsRecipe from '../CardsRecipe/CardsRecipe'
const Search = () => {
  // const apiKey = "2c37e09a9c0d4031b6a92148cf3b63d4";
  // const baseUrl = "https://api.spoonacular.com/recipes/complexSearch"
  const [minProtein, setMinProtein]=useState(100);
  const [maxProtein, setMaxProtein]= useState(200);
  const [meal, setMeal]= useState([])
    useEffect(()=>{
      const getRecipe= ()=>{
        axios.get(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=2c37e09a9c0d4031b6a92148cf3b63d4&minProtein=${minProtein}&maxProtein=${maxProtein}&number=10`)
      .then(res=> {
        console.log("data is ",res)
        setMeal(res.data)
        // console.log(m)
      })
          .catch(error=>{
            console.log(error)
          })
        }
        getRecipe()
      },[])
      
    
  return (
    <div className={classes.searchSection}>
      <h4>Search Our Special Recipes</h4>
      
      <label htmlFor="">Search for recipe</label>
      <input type="number" 
      value={minProtein}
      onChange={(e)=>setMinProtein(e.target.value)}
      />
      <input 
      type="number"
      value={maxProtein}
      onChange={(e)=>setMaxProtein(e.target.value)}
      />
      <Button  onClick={setMeal}name="Get Recipe"/>
     
        {
          meal.map((items, index)=> 
          <CardsRecipe 
          title={items.title} 
          calories={items.calories} 
          carbs={items.carbs} 
          fat={items.fat}
          protein={items.protein}
          image={items.image}
          key={items.key}
          />
          )
      }

    </div>
  )
}


export default Search
