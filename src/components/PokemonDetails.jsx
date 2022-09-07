import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './styles/pokemonDetails.css'

const PokemonDetails = () => {

  const [pokeInfo, setPokeInfo] = useState()

  const { name } = useParams()

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}`
    axios.get(URL)
      .then(res => setPokeInfo(res.data))
      .catch(err => console.log(err))

  }, [])
  console.log(pokeInfo)

  return (
    <div className='details__div'>

      <article className='details__article'>

        <img className='details__img' src={pokeInfo?.sprites.other['official-artwork'].front_default} alt="" />
        <h1 className='details__name'>{name}</h1>
        <div className='details-container'>
          <h2 className='details__moments-title'>The Movements</h2>
          <ul className='details__movements'>
            <li className='details__move'>{pokeInfo?.moves[0].move.name}</li>
            <li className='details__move'>{pokeInfo?.moves[1].move.name}</li>
            <li className='details__move'>{pokeInfo?.moves[2].move.name}</li>
            <li className='details__move'>{pokeInfo?.moves[3].move.name}</li>
            <li className='details__move'>{pokeInfo?.moves[4].move.name}</li>
            <li className='details__move'>{pokeInfo?.moves[5].move.name}</li>
          </ul>
        </div>
      </article>
    </div>
  )
}





export default PokemonDetails