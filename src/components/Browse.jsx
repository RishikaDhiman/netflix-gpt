import React, { useEffect } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { Api_Options } from '../utlis/constant';
import { addNowPlayingMovies } from '../utlis/movieSlice';
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div className='Browse_page'>
      <Header/>
      <MainContainer/>
      {/* <SecondaryContainer/> */}
    </div>
  )
}

export default Browse
