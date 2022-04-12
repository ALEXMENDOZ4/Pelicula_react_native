import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MoviePoster from '../components/MoviePoster';
import useMovies from '../hooks/useMovies';

const HomeScreen = () => {


  const { peliculaCine, loading } = useMovies();
  const { top } = useSafeAreaInsets();



  if(loading){
    return(
      <View style={{flex: 1, justifyContent: "center", alignContent: 'center'}}>
        <ActivityIndicator color="red" size={50}>
        </ActivityIndicator>
      </View>
    )
  }

  return (
    <View style={{marginTop: top + 20}}>
        <MoviePoster/>
    </View>
  )
}

export default HomeScreen