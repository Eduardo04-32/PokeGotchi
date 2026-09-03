import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import CardPokemon from '../components/CardPokemon'

const Home = () => {
  return (
    <View style={styles.container}>

      {/* CABEÇALHO */}
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

      {/* CONTEÚDO */}
      <View style={styles.conteudo}>

        <Text style={styles.titulo}>
          Professor Oak
        </Text>

        <Text style={styles.descricao}>
          Sua jornada começa aqui. Escolha um Pokémon e
          cuide dele para ficar feliz, saudável e forte.
        </Text>

        <CardPokemon nome='pikachu' imagem='teste' cor='rgba(254, 255, 178, 1)' />
        <CardPokemon nome='charmander' imagem='teste2' cor='rgba(253, 208, 148, 1)' />
        <CardPokemon nome='squirtle' imagem='teste3' cor='rgba(211, 235, 252, 1)'  />

      </View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F8F5ED',
  },

  // HEADER
  apresenta: {
    height: 280,
    backgroundColor: '#D92D27',

    borderBottomLeftRadius: 55,
    borderBottomRightRadius: 55,

    alignItems: 'center',
    justifyContent: 'center',
  },

  foto: {
    width: 150,
    height: 120,
    marginBottom: 20,
  },

  logo: {
    fontSize: 45,
    fontWeight: '900',
    color: '#FFD42A'
  },

  subtitulo: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
    marginTop: 10,
    letterSpacing: 2,
  },

  // CONTEÚDO
  conteudo: {
    paddingHorizontal: 38,
    paddingTop: 15,
  },

  titulo: {
    fontSize: 30,
    fontWeight: '800',
    color: '#171717',
  },

  descricao: {
    fontSize: 21,
    lineHeight: 32,
    color: '#666666',
    marginBottom: 35,
  },

  // CARDS
  card: {
    height: 120,
    borderRadius: 28,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 10,
    marginBottom: 20,


    shadowColor: '#000',

  },

  bulbasaur: {
    backgroundColor: '#aff7caff',
  },

  charmander: {
    backgroundColor: '#fccaa9ff',
  },

  squirtle: {
    backgroundColor: '#95c9fdff',
  },

  // CÍRCULOS
  circulo: {
    width: 100,
    height: 100,
    borderRadius: 50,

    alignItems: 'center',
    justifyContent: 'center',
  },

  verde: {
    backgroundColor: '#28b168ff',
  },

  laranja: {
    backgroundColor: '#f3601cff',
  },

  azul: {
    backgroundColor: '#2282d6ff',
  },

  letra: {
    color: '#FFFFFF',
    fontSize: 45,
    fontWeight: '900',
  },

  // TEXTOS DOS CARDS
  textos: {
    flex: 1,
    marginLeft: 25,
  },

  nome: {
    fontSize: 29,
    fontWeight: '900',
    color: '#171717',
  },

  descPokemon: {
    fontSize: 18,
    color: '#666666',
    marginTop: 2,
  },

  // SETAS
  seta: {
    fontSize: 55,
    fontWeight: '300',
  },

  setaVerde: {
    color: '#42B578',
  },

  setaLaranja: {
    color: '#F4773C',
  },

  setaAzul: {
    color: '#438FD3',
  },

})