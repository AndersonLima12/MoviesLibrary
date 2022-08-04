import React from 'react'
import { useEffect, useState } from 'react';
import {useSearchParams} from "react-router-dom";
import MovieCard from "../components/MovieCard"

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import "./MovieGrid.css";

const Search = () => {

  const [searchParams] = useSearchParams()

  const [topMovies, setTopMovies] = useState([])
  const query = searchParams.get("q")

  const getSearchMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setTopMovies(data.results)
  }

  useEffect(()=> {
    
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`
    
   getSearchMovies(searchWithQueryURL)
  }, [query])

  return (
    <div className='container'>
      <h2 className='title'>Resultados para: <span className='query-text'>{query}</span></h2>
      <div className='movies-container'>
         {topMovies.length === 0 && <p>Carregando...</p> }
         {topMovies.length > 0 && topMovies.map((movie)=> <MovieCard  key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}

export default Search