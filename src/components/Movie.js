import React,{Fragment, useContext} from 'react'
import { MoviesContext } from './context/movies/moviesContext';
import './Movies.scss'

const DEFAULT_PLACEHOLDER_IMAGE =
"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

export default function Movies() {

  const {movies, errorMessage, loading} = useContext(MoviesContext)

  
    return (
            <Fragment>
              
            </Fragment> 
    )
}
