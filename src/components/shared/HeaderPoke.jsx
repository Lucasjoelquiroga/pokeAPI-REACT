import React from 'react'
import './style/headerPoke.css'

export const HeaderPoke = () => {
  return (
    <header className='red-rectangle-header'>
      <img className='header-img' src="/pokedex.png" alt="" />
      <div className='black-rectangle-header'></div>
      <div className='circle-ext-header'>
        <div className="circle-int-header"></div>
      </div>
    </header>
  )
}


export default HeaderPoke
