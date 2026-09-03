import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

interface PokemonCardProps {
  nome: string;
  imagem: string; 
  cor: string;
}

const CardPokemon = ({ nome, imagem, cor,  }: PokemonCardProps) => {
  return (
    <View style={styles.alinhado}>
      <View style={[styles.containerCard, { backgroundColor: cor }]}>
        <View style={styles.agrupado}>
          <View style={[styles.imagemPokemon]}>
            <Image source={{ uri: imagem }} style={styles.imagem} />
          </View>
        
          <Text style={styles.nomePokemon}>{nome}</Text>
        </View>
        
        <TouchableOpacity style={[styles.botaoConfirmar]}> 
          <Text style={styles.textoBotao}>ir</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CardPokemon

const styles = StyleSheet.create({

    containerCard:{
        width: 340,
        margin: 12,
        borderRadius: 20,
        boxShadow: '6px 10px rgba(27, 61, 92, 1)',
        borderWidth: 1,
        borderColor: 'red',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
        paddingLeft: 20,
        padding: 8,
        flexDirection: 'row',
    },
    imagemPokemon:{
        backgroundColor: 'yellow',
        width: 60,
        height: 60,
        borderWidth: 2,
        boxShadow: '4px 4px',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: 30
    },
    nomePokemon:{
        fontSize: 20,
        fontWeight: '800'   
    },
    botaoConfirmar: {
        padding: 15,
        height: 50,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    textoBotao: {
        fontWeight: '700',
        fontSize: 18
    },
    imagem:{
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    alinhado:{
        alignItems: 'center',
    },
    agrupado:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30,
        width: '50%'
    }

})