import { StyleSheet, Text, View, Image } from 'react-native'
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

        <CardPokemon
          nome="pikachu"
          imagem="teste"
          cor="rgba(254, 255, 178, 1)"
        />

        <CardPokemon
          nome="charmander"
          imagem="teste2"
          cor="rgba(253, 208, 148, 1)"
        />

        <CardPokemon
          nome="squirtle"
          imagem="teste3"
          cor="rgba(211, 235, 252, 1)"
        />

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
    color: '#FFD42A',
  },

  subtitulo: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
    marginTop: 10,
    letterSpacing: 2,
  },

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
})