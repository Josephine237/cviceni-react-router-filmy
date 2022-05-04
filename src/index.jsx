import React from 'react';
import { render } from 'react-dom';

import MovieList from './components/MovieList'
import Movie from './components/Movie';

import './style.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
     <h1>Movies</h1>

     <Routes>
       <Route path="/" element={<MovieList />} />
       <Route path="/" element={<Movie /> } />

      

      </Routes>
    </BrowserRouter>
  );
}

render(<App />, document.querySelector('#app'));
