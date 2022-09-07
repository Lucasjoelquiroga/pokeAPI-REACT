import React from 'react'
import './style/searchInput.css'

const SearchInput = ({ setPokeSearch, setOptionType }) => {

  const handleSubmit = e => {
    e.preventDefault()
    setPokeSearch(e.target.searchText.value.trim().toLowerCase())
    setOptionType('All')
    e.target.searchText.value = ""

  }

  return (
    <form className='search_form' onSubmit={handleSubmit} >
      <input placeholder='Choose your Pokemon' className='search_input' id='searchText' type="text" />
      <button className='search_btn'>Search</button>
    </form>
  )
}

export default SearchInput