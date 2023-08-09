import React from 'react'

const Button = ({name}) => {
    const style={
        width: "150px",
        height: "40px",
        marginTop: "10px",
        backgroundColor: "orange",
        border: "none",
        borderRadius: "5px",
        fontFamily:"sans-serif",
        cursor:"pointer",
        color: 'white',
        fontWeight:"600px",
        fontSize: "16px"


        
    }
  return (
    <div>
         <button  style={style} type='submit'>{name}</button>
    </div>
  )
}

export default Button