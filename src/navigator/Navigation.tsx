import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import DetailScreen from '../screen/DetailScreen';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, cardStyle: { backgroundColor: "white" }}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={DetailScreen} />
    </Stack.Navigator>
  );
}