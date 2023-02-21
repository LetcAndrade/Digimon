import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Views/Home';
import Inicio from './Views/Inicio'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Digimon">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false}}/>
        <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
