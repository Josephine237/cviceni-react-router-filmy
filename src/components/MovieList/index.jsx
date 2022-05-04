import React from 'react';
import movies from './../../movies.js';

import { Link } from "react-router-dom";
import "./style.css"

const MovieList = () => {
	return (
		<nav>
			<ul className="movie-list">
			{movies.map((movie) => (
					<li className='movielist_item' key={movie.id}> 
					< Link to={`/movies/${movie.id}`}>
						<img className='movielist__poster'
						src={`/assets/${movie.poster}`}
						alt={`poster${movie.title}`}
						/>
						<p>{movie.title}</p>
						<p>{movie.year}</p>
					</Link>
					</li>
				))}			
			</ul>
    	</nav>
	)
}

export default MovieList;