import React, { useEffect, useState } from 'react'
import axios from 'axios'
import classes from './Search.module.css'
import Button from '../Button/Button'
import CardsRecipe from '../CardsRecipe/CardsRecipe'
import { getRoles } from '@testing-library/react'
const Search = () => {
  const [minProtein, setMinProtein]=useState(50);
  const [maxProtein, setMaxProtein]= useState(200);
  const [meal, setMeal]= useState([])
  const handleMinProtein=(e)=>{
    let userInput=e.target.value
    setMinProtein(userInput)
  }
  const handleMaxProtein=(e)=>{
    let userMaxProtein=e.target.value
    setMaxProtein(userMaxProtein)
  }
  const handleSearch =(e)=>{
    e.preventDefault()
    // setMeal()

  }
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
      <div className={classes.search}>
       <div className={classes.form}>
          <p className={classes.p}>Search by Nutrient</p> 
          <div className={classes.formDiv}>
          <input 
          type="number" 
          placeholder="min"
          value={ minProtein} 
          onChange={handleMinProtein} 
          />
          <input 
          type="number" 
          placeholder="max"
          value={maxProtein}
          onChange={handleMaxProtein}
          />
          <button  onClick={handleSearch} className={classes.btn}>Search</button>
          </div>
       </div>
      </div>
      <div className={classes.data}>
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
     

    </div>
  )
}


export default Search
