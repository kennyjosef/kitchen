import React from 'react'
import Logo2 from '../../Assets/dish-2 1.svg'
import Logo3 from '../../Assets/Mask group.svg'
import classes from './Hero.module.css'
import Button from '../Button/Button'
const Hero = () => {
  return (
    <div className={classes.heroSection}>
        <div className={classes.heroText}>
            <h2>We provide the 
                <br /> best food for you.</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam accusantium ut nam laudantium enim mollitia quos nobis debitis odio, tempore quaerat expedita aperiam temporibus. Id dolor laborum totam at optio.
            </p>
            <Button name="Order"/>
        </div>
        <div className={classes.heroImages}>
            <img src={Logo3} alt="pic"  className={classes.pic}/>
                <img src={Logo2} alt="plate" className={classes.plate}/>
        </div>
    </div>
  )
}

export default Hero
