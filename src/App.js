import React from 'react';
import './App.css'
import MoviesState from './components/context/movies/MoviesState';
import Header from './components/Header';
import Movies from './components/Movies';
import Search from './components/Search';

function App() {

  return (
  <MoviesState>
        <div className="App">
              <Header text='Movise Search'/>
            <p className="App-intro">Sharing a few of our favourite movies</p>
              <Search/>
              <div className="movies">
                  <Movies/>
              </div>
        </div>
    </MoviesState>
  );
}

export default App;
