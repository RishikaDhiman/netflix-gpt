import React from 'react'
import useMovieVideo from '../customHooks/useMovieVideo'
import { useSelector } from 'react-redux';


const VideoBackground = ({movie_id}) => {

  useMovieVideo(movie_id);

  const trailerVideo = useSelector(store=>store.movies.trailerVideo);

  return (
    <div className = 'VideoBackground'>
      <iframe width="100%" height="100%" 
      src={`https://www.youtube.com/embed/e1k1PC0TtmE?autoplay=1&controls=0&mute=1&loop=1&disablekb=1`}
      title="YouTube video player" 
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground
