import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {

    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
    
    if(movies===null) return;

    const mainMovie = movies[0];
    // console.log(mainMovie);
    const {title, overview, id} = mainMovie;
    // console.log(id)

  return (
    <div className='MainContainer'>
      <VideoBackground movie_id={id}/>
      <VideoTitle title={title} overview={overview}/>
    </div>
  )
}

export default MainContainer
