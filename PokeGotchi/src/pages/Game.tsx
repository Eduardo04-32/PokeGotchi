import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { Button, Card, ProgressBar, Text } from 'react-native-paper';
import { useAudioPlayer } from 'expo-audio';

import { PokemonViewModel } from '../types/Pokemon';
import { buscarPokemon } from '../services/pokemonApi';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/Navegation';

type Props = NativeStackScreenProps<RootStackParamList, 'Game'>;

export default function Game({ route }: Props) {

  const { pokemon } = route.params;

  // -------------------------
  // ESTADOS DO POKÉMON
  // -------------------------

  const [nivel, setNivel] = useState(1);
  const [xp, setXp] = useState(0);

  const [fome, setFome] = useState(100);
  const [felicidade, setFelicidade] = useState(100);
  const [energia, setEnergia] = useState(100);
  const [higiene, setHigiene] = useState(100);

  const [mensagem, setMensagem] = useState(
    'Estou me sentindo bem'
  );

  const [pokemonApi, setPokemonApi] =
    useState<PokemonViewModel | null>(null);


  // -------------------------
  // ÁUDIOS
  // -------------------------

  const somAlimentar = useAudioPlayer(
    require('../../assets/a-comer.mp3')
  );

  const somBrincar = useAudioPlayer(
    require('../../assets/toques-engracados-super-mario-ringtone.mp3')
  );

  const somDormir = useAudioPlayer(
    require('../../assets/a-dormir-mi-bebito-xd.mp3')
  );

  const somLimpar = useAudioPlayer(
    require('../../assets/tomar-banho-nesse-frio-pqp (1).mp3')
  );

  const somTreinar = useAudioPlayer(
    require('../../assets/lwa-gero-gero-gero.mp3')
  );


  // -------------------------
  // PARAR TODOS OS ÁUDIOS
  // -------------------------

  const pararTodosOsSons = () => {

    somAlimentar.pause();
    somBrincar.pause();
    somDormir.pause();
    somLimpar.pause();
    somTreinar.pause();

  };


  // -------------------------
  // FUNÇÕES DOS ÁUDIOS
  // -------------------------

  const tocarAlimentar = () => {

    pararTodosOsSons();

    somAlimentar.seekTo(0);
    somAlimentar.play();

  };

  const tocarBrincar = () => {

    pararTodosOsSons();

    somBrincar.seekTo(0);
    somBrincar.play();

  };

  const tocarDormir = () => {

    pararTodosOsSons();

    somDormir.seekTo(0);
    somDormir.play();

  };

  const tocarLimpar = () => {

    pararTodosOsSons();

    somLimpar.seekTo(0);
    somLimpar.play();

  };

  const tocarTreinar = () => {

    pararTodosOsSons();

    somTreinar.seekTo(0);
    somTreinar.play();

  };


  // -------------------------
  // PASSAGEM DO TEMPO
  // -------------------------

  useEffect(() => {

    const tempo = setInterval(() => {

      setFome(v => Math.max(0, v - 2));
      setFelicidade(v => Math.max(0, v - 1));
      setEnergia(v => Math.max(0, v - 1));
      setHigiene(v => Math.max(0, v - 1));

    }, 10000);

    return () => clearInterval(tempo);

  }, []);


  // -------------------------
  // BUSCAR POKÉMON NA API
  // -------------------------

  useEffect(() => {

    const carregarPokemon = async () => {

      const dados = await buscarPokemon(pokemon);

      setPokemonApi(dados);

    };

    carregarPokemon();

  }, [pokemon]);


  // -------------------------
  // EXPERIÊNCIA
  // -------------------------

  const xpGanhar = (valor: number) => {

    setXp(x => {

      if (x + valor >= 100) {

        setNivel(n => n + 1);

        return x + valor - 100;

      }

      return x + valor;

    });

  };


  // -------------------------
  // AÇÕES
  // -------------------------

  const alimentar = () => {

    setFome(v => Math.min(100, v + 20));

    xpGanhar(5);

    setMensagem('Alimentado');

  };


  const brincar = () => {

    setFelicidade(v => Math.min(100, v + 15));

    setEnergia(v => Math.max(0, v - 10));

    setFome(v => Math.max(0, v - 5));

    xpGanhar(10);

    setMensagem('Estou feliz');

  };


  const dormir = () => {

    setEnergia(v => Math.min(100, v + 25));

    setMensagem('Zzz...');

  };


  const limpar = () => {

    setHigiene(v => Math.min(100, v + 20));

    xpGanhar(5);

    setMensagem('Agora estou limpo');

  };


  const treinar = () => {

    setEnergia(v => Math.max(0, v - 15));

    setFome(v => Math.max(0, v - 10));

    xpGanhar(26);

    setMensagem('Vamos treinar');

  };


  // -------------------------
  // INTERFACE
  // -------------------------

  return (

    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        POKÉGOTCHI
      </Text>


      {/* POKÉMON */}

      <Card style={styles.pokemon}>

        <Image
          source={{ uri: pokemonApi?.image }}
          style={styles.image}
        />

        <Text style={styles.message}>
          {mensagem}
        </Text>

      </Card>


      {/* INFORMAÇÕES */}

      <Card style={styles.card}>

        <Text style={styles.name}>
          {pokemonApi?.name?.toUpperCase()}
        </Text>

        <Text>
          #{pokemonApi?.id} • Tipo: {pokemonApi?.type?.toUpperCase()}
        </Text>

        <Text>
          Altura:{' '}
          {pokemonApi
            ? pokemonApi.height / 10
            : 0} m
        </Text>

        <Text>
          Peso:{' '}
          {pokemonApi
            ? pokemonApi.weight / 10
            : 0} kg
        </Text>


        <View style={styles.row}>

          <Text>
            NÍVEL {nivel}
          </Text>

          <Text>
            {xp}/100 XP
          </Text>

        </View>


        <ProgressBar
          progress={xp / 100}
        />

      </Card>


      {/* CUIDADOS */}

      <Card style={styles.card}>

        <Text style={styles.section}>
          CUIDADOS
        </Text>


        <Text>
          Fome: {fome}%
        </Text>

        <ProgressBar
          progress={fome / 100}
        />


        <Text>
          Felicidade: {felicidade}%
        </Text>

        <ProgressBar
          progress={felicidade / 100}
        />


        <Text>
          Energia: {energia}%
        </Text>

        <ProgressBar
          progress={energia / 100}
        />


        <Text>
          Higiene: {higiene}%
        </Text>

        <ProgressBar
          progress={higiene / 100}
        />

      </Card>


      {/* AÇÕES */}

      <Card style={styles.cardAcao}>

        <Text style={styles.section}>
          AÇÕES
        </Text>


        <Button
  mode="contained"
  style={styles.btn}
  onPress={() => {
    tocarAlimentar();
    alimentar();
  }}
>
  ALIMENTAR
</Button>

<Button
  mode="contained"
  style={styles.btn}
  onPress={() => {
    tocarBrincar();
    brincar();
  }}
>
  BRINCAR
</Button>

<Button
  mode="contained"
  style={styles.btn}
  onPress={() => {
    tocarDormir();
    dormir();
  }}
>
  DORMIR
</Button>

<Button
  mode="contained"
  style={styles.btn}
  onPress={() => {
    tocarLimpar();
    limpar();
  }}
>
  LIMPAR
</Button>

<Button
  mode="contained"
  style={styles.btn}
  onPress={() => {
    tocarTreinar();
    treinar();
  }}
>
  TREINAR +26 XP
</Button>

      </Card>

    </ScrollView>
  );
}


// -------------------------
// ESTILOS
// -------------------------

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F1E8',
  },

  title: {
    backgroundColor: '#D92828',
    color: '#FFD740',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },

  pokemon: {
    margin: 15,
    padding: 15,
    backgroundColor: '#D92828',
    alignItems: 'center',
  },

  image: {
    width: 250,
    height: 250,
  },

  message: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    fontWeight: 'bold',
  },

  card: {
    margin: 15,
    padding: 20,
    gap: 8,
  },

  cardAcao: {
    width: 350,
    height: 320,
    margin: 15,
    padding: 20,
    gap: 15,
  },

  btn:{
    margin: 6
  },

  name: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  section: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  footer: {
    textAlign: 'center',
    margin: 20,
    color: '#777',
  },

});