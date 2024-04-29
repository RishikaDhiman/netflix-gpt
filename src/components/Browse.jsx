import React, { useEffect } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { Api_Options } from '../utlis/constant';
import { addNowPlayingMovies } from '../utlis/movieSlice';
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies';

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div className='Browse_page'>
      <Header/>
    </div>
  )
}

export default Browse
