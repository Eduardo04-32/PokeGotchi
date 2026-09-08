import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import CardPokemon from '../components/CardPokemon'
import { useAudioPlayer } from 'expo-audio'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types/Navegation'

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({ navigation }: Props) => {

  const player = useAudioPlayer(
    require('../../assets/water_drip.mp3')
  )

  const tocar = () => {
    player.seekTo(0)
    player.play()
  }

  return (
    <ScrollView style={styles.container}>

      <View style={styles.apresenta}>
        <Image
          source={require('../../assets/pokemon.png')}
          style={styles.foto}
          resizeMode="contain"
        />

        <Text style={styles.logo}>
          POKÉGOTCHI
        </Text>

        <Text style={styles.subtitulo}>
          E S C O L H A  S E U  P A R C E I R O
        </Text>
      </View>

      <View style={styles.conteudo}>

        <Text style={styles.titulo}>
          Professor Oak
        </Text>

        <Text style={styles.descricao}>
          Sua jornada começa aqui. Escolha um Pokémon e
          cuide dele para ficar feliz, saudável e forte.
        </Text>

        <CardPokemon
          nome="bulbasaur"
          imagem="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          cor="rgba(254, 255, 178, 1)"
          onPress={() => {
            tocar()

            navigation.navigate('Game', {
              pokemon: 'bulbasaur'
            })
          }}
        />

        <CardPokemon
          nome="charmander"
          imagem="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
          cor="rgba(253, 208, 148, 1)"
          onPress={() => {
            tocar()

            navigation.navigate('Game', {
              pokemon: 'charmander'
            })
          }}
        />

        <CardPokemon
          nome="squirtle"
          imagem="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
          cor="rgba(211, 235, 252, 1)"
          onPress={() => {
            tocar()

            navigation.navigate('Game', {
              pokemon: 'squirtle'
            })
          }}
        />

      </View>

    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  apresenta: {
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 20,
  },

  foto: {
    width: 250,
    height: 150,
  },

  logo: {
    fontSize: 32,
    fontWeight: '900',
    marginTop: 10,
  },

  subtitulo: {
    fontSize: 12,
    fontWeight: '700',
    marginTop: 8,
  },

  conteudo: {
    alignItems: 'center',
    paddingBottom: 30,
  },

  titulo: {
    fontSize: 24,
    fontWeight: '800',
    marginTop: 10,
  },

  descricao: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 15,
    paddingHorizontal: 25,
  },
})