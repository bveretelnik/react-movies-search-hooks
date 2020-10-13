import Axios from 'axios'
import React, {useReducer, useEffect} from 'react'
import { SEARCH_MOVIES_FAILURE, SEARCH_MOVIES_REQUEST, SEARCH_MOVIES_SUCCESS } from '../types'
import { MoviesContext } from './moviesContext'
import { moviesReducer } from './moviesReducer'

const MOVIE_API_URL = 'http://www.omdbapi.com/?s=tt3896198&apikey=9753ea4a'

const initialState = {
    loading: true,
    movies: [],
    errorMessage: null
}

export default function MoviesState({children}) {

    const [state, dispatch] = useReducer(moviesReducer, initialState)

useEffect(() => {
   Axios.get(MOVIE_API_URL)
   .then(res=>{
       dispatch({
           type:SEARCH_MOVIES_SUCCESS,
           payload:res.data
       })
   })
   
}, [])

const search = value => {
    dispatch({
        type:SEARCH_MOVIES_REQUEST
    })

  Axios(`https://www.omdbapi.com/?s=${value}&apikey=9753ea4a`)
    .then(res => {
        if(res.data.Response === 'True'){
            dispatch({
                type:SEARCH_MOVIES_SUCCESS,
                payload: res.data.Search
            })
            console.log(state.movies)
        }else {
            dispatch({
                type:SEARCH_MOVIES_FAILURE,
                error: res.data.Error
            })
        }
    })

}

const {movies, errorMessage, loading} = state

    return (
        <MoviesContext.Provider value={{
            search,
            movies,
            errorMessage,
            loading
        }}>
            {children}
        </MoviesContext.Provider>
    )
}
