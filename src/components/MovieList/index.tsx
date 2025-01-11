'use client';

import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/discover/movie',
      params: {
        api_key: '66735d242e135ef82b382c9f343ddafd',
        language: 'pt-BR',
      },
    }).then((response) => {
      setMovies(response.data.results);
    });
  };

  return (
    <ul className='movie-list'>
      {movies.map((movie) => (
        <li className='movie-card'>
          <p>{movie.title}</p>
          <p>{movie.overview}</p>
        </li>
      ))}
    </ul>
  );
}
