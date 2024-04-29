import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Api_Options } from '../utlis/constant';
import { addNowPlayingMovies } from '../utlis/movieSlice';

const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();

    const getNowPlyingMovies = async() =>{
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing",
            Api_Options
        )

        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(()=>{
        getNowPlyingMovies();
    },[])
}

export default useNowPlayingMovies;