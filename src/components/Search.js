import React, {useState, useContext} from 'react'
import { MoviesContext } from './context/movies/moviesContext';
import './Search.scss'

export default function Search() {

    const {search} = useContext(MoviesContext)

    const [searchValue, setSearchValue] = useState('');

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value)
    }
    
    const callSearchFunction = (e) => {
        e.preventDefault()
        search(searchValue)
        setSearchValue('')
    }

    return (
        <div className="form__group field">
        <form className="search">
        <input 
        type="input" 
        className="form__field" 
        placeholder="Name" 
        name="name" id='name'
        value={searchValue} 
        onChange={handleSearchInputChanges}
        />
        <label htmlFor="name" className="form__label">Name</label>
        <input className='button' onClick={callSearchFunction} type="submit" value="SEARCH" />
      </form>
      </div>
    )
}
