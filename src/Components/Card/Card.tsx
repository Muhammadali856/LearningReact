import React from 'react'
import './Card.css'

type Props = {}

const Card = (props: Props) => {
  return (
    <div className='card'>
        <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYyxRDrJKhWSGOwCDdHS5K_6EOY20t0fsUFg&s" 
            alt="Image" 
        />
        <div className='details'>
            <h2>Nimadir</h2>
            <p>Narxi: 1000 $</p>
        </div>
        <p className='info'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, maxime.
        </p>
    </div>
  )
}

export default Card