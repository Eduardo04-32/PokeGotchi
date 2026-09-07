import React from 'react';
import { StyleSheet, View } from 'react-native';
import Game from './src/pages/Game';



export default function App() {

  const pokemon = {
    id: 25,
    name: 'Pikachu',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    type: 'electric',
    height: 4,
    weight: 60,
  };

  return (
    <View style={styles.container}>
      <Game pokemon={pokemon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});