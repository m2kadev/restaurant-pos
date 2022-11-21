import React from 'react'
import { BiSearch } from 'react-icons/bi'

const SearchForm = () => {
  return (
    <div className='search-form'>
        <BiSearch className='search-icon' />
        <input type='text' placeholder='Search for food, coffee, etc...'  />
    </div>
  )
}

export default SearchForm