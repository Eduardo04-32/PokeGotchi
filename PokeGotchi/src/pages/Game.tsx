import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { PokemonViewModel } from '../types/Pokemon';

interface Props {
  pokemon: PokemonViewModel;
}

export default function Game({ pokemon }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        POKÉGOTCHI
      </Text>
      <Card style={styles.card}>
        <Image
          source={{ uri: pokemon.image }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.name}>
          {pokemon.nome.toUpperCase()}
        </Text>
        <View style={styles.info}>
          <Text style={styles.text}>
            Pokédex: #{pokemon.id}
          </Text>
          <Text style={styles.text}>
            Tipo: {pokemon.type.toUpperCase()}
          </Text>
          <Text style={styles.text}>
            Nível: 1
          </Text>
          <Text style={styles.text}>
            Experiência: 0 XP
          </Text>
        </View>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#10131A',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    color: '#FFD740',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  card: {
    width: '100%',
    backgroundColor: '#1D2430',
    borderRadius: 20,
    padding: 20,
  },

  image: {
    width: 250,
    height: 250,
    alignSelf: 'center',
  },

  name: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },

  info: {
    marginTop: 20,
  },

  text: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 10,
  },
});