import React, {useContext} from 'react'
import { MoviesContext } from './context/movies/moviesContext';
import Loader from './Loader';
import Movie from './Movie';
import './Movie.scss'

export default function Movies() {

    const {movies, errorMessage, loading} = useContext(MoviesContext)

    return (
        <div className="movies">
        {loading && !errorMessage ? (
      <Loader />
    ) : errorMessage ? (
      <div className="errorMessage">{errorMessage}</div>
    ) : (
      movies.map((movie, index) => (
        <Movie key={`${index}-${movie.Title}`} movie={movie} />
      ))
    )}
      </div>
    )
}
