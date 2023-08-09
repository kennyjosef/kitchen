import React from 'react'
// import Logo1 from '../../Assets/kit.png'
import './Navbar.css'
import { useState } from 'react'

const Navbar = () => {
  const [toggle, setToggle] = useState(true)

  function handleClick(){
      return setToggle(preToggle=> !preToggle)
  }
  return (
    <div className='fixed'>
      <div className="navbar">
        <div>
          <h4>Kitchen</h4>
        </div>
          <ul className={toggle ? "ul" :'navShow'}>
              <li>Home</li>
              <li>Service</li>
              <li>Order</li>
              <li>About</li>
          </ul>
          <div className='hamburger' onClick={handleClick} >
                {toggle?<span className='bar'>&#9776;</span >:<span className='bar'>&times;</span>
                }
        </div>
      </div>
    </div>
  )
}

export default Navbar
