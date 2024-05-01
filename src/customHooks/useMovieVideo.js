import { useEffect } from "react";
import { Api_Options } from "../utlis/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utlis/movieSlice";

const useMovieVideo =(movie_id)=>{
    const dispatch = useDispatch();

    const getMovieVideo = async()=> {
        let movie_video_data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, Api_Options);
        movie_video_data = await movie_video_data.json();
        console.log(movie_video_data);

        const trailer = movie_video_data.results.filter((video)=>{
            return video.name === "Official Trailer";
        })
        console.log(trailer);
        dispatch(addTrailerVideo(trailer))
    };

  useEffect(()=>{
    getMovieVideo();
  },[movie_id]);

};

export default useMovieVideo;