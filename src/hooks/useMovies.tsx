import React, {useEffect, useState} from 'react';
import movieBD from '../api/movieDB';
import { MovieDBPlaying, Movies } from '../interfaces/movieInterfaces';

const useMovies = () => {

  const [peliculaCine, setpeliculaCine] = useState<Movies[]>([]);  
  const [loading, setloading] = useState<boolean>(false);  

  const getMovies = async () => {
    try {
      const resp = await movieBD.get<MovieDBPlaying>('/now_playing');
      console.log(resp);
      setpeliculaCine(resp.data.results);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    peliculaCine,
    loading
  };
};

export default useMovies;
