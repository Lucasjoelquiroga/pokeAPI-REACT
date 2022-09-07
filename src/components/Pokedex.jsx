import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PokemonCard from './pokedex/PokemonCard'
import { useSelector } from 'react-redux'
import SearchInput from './pokedex/SearchInput'
import HeaderPoke from './shared/HeaderPoke'
import { SelectType } from './pokedex/SelectType'
import './styles/pokedex.css'
import Paginacion from './Paginacion'


const Pokedex = () => {
  const [currentBlock, setCurrentBlock] = useState(1)
  const [page, setPage] = useState(0)
  
  const [pokemons, setPokemons] = useState()
  const [pokeSearch, setPokeSearch] = useState()
  const [optionType, setOptionType] = useState('All')

  useEffect(() => {
    let URL
    if (optionType !== 'All'){
 URL = `https://pokeapi.co/api/v2/type/${optionType}/`
axios.get(URL)
.then(res => {
  const arr = res.data.pokemon.map(e => e.pokemon)
  setPokemons({results: arr})
})
.catch(err => console.log(err))
console.log(pokemons)

    } else if (pokeSearch){
      const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`
      const obj = {
        results:[{url}]
      }
setPokemons(obj)
    } else {
      const URL = `https://pokeapi.co/api/v2/pokemon/?limit=9999999999999&offset=0`
      axios.get(URL)
      .then(res => setPokemons(res.data))
      .catch(err => console.log(err))
    }
  }, [pokeSearch, optionType, page])

  const nameTrainer= useSelector(state => state.nameTrainer)
  

  return (
    <div className='pokedex'>
      <HeaderPoke/>
      <h2 className='pokedex__title'>Welcome {nameTrainer}, catch them all!</h2>
      <SearchInput 
      setPokeSearch={setPokeSearch}
      setOptionType={setOptionType}/>
      <SelectType
      setOptionType={setOptionType}
      optionType={optionType}
      setPokeSearch={setPokeSearch}
      setPage={setPage}
      setCurrentBlock={setCurrentBlock}/>
      <div className='pokedex__pagination'>
        <Paginacion
        pokemons={pokemons}
        page={page}
        setPage={setPage}
        currentBlock={currentBlock}
        setCurrentBlock={setCurrentBlock}/>
      </div>
      <div className='cards-container'>
{
  pokemons?.results.slice(page * 18, (page + 1) * 18).map(pokemon => (
    <PokemonCard 
    key={pokemon.url}
    url={pokemon.url}
    />
  ))
}
      </div>

      
      <Paginacion
        pokemons={pokemons}
        page={page}
        setPage={setPage}
        currentBlock={currentBlock}
        setCurrentBlock={setCurrentBlock}/>
    </div>
  )
}

export default Pokedex

    


          
       
  
