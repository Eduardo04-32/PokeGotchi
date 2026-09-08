import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Game from './src/pages/Game';

import { RootStackParamList } from './src/types/Navegation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={Home}
        />

        <Stack.Screen
          name="Game"
          component={Game}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}