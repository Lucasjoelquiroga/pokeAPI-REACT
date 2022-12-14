import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Pokedex from './components/Pokedex'
import PokemonDetails from './components/PokemonDetails'
import ProtectecRoute from './components/ProtectecRoute'


function App() {
  return (
    <div className="App">
<Routes>
  <Route path='/'  element={<Home/>}/>
  
  <Route element={<ProtectecRoute/>}>
  <Route path='/pokedex'  element={<Pokedex/>}/>
  <Route path='pokedex/:name'  element={<PokemonDetails />}/>
  </Route>


</Routes>
  
    </div>
  )
}

export default App
  

