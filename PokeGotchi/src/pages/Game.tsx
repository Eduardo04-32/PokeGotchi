import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { Button, Card, ProgressBar, Text } from 'react-native-paper';
import { PokemonViewModel } from '../types/Pokemon';
interface Props {
  pokemon: PokemonViewModel;
}
export default function Game({ pokemon }: Props) {
  const [nivel, setNivel] = useState(1);
  const [xp, setXp] = useState(0);
  const [fome, setFome] = useState(100);
  const [felicidade, setFelicidade] = useState(100);
  const [energia, setEnergia] = useState(100);
  const [higiene, setHigiene] = useState(100);
  const [mensagem, setMensagem] = useState('Estou me sentindo bem');

  useEffect(() => {
    const tempo = setInterval(() => {
      setFome(v => Math.max(0, v - 2));
      setFelicidade(v => Math.max(0, v - 1));
      setEnergia(v => Math.max(0, v - 1));
      setHigiene(v => Math.max(0, v - 1));
    }, 10000);
    return () => clearInterval(tempo);
  }, []);
  const xpGanhar = (valor: number) => {
    setXp(x => {
      if (x + valor >= 100) {
        setNivel(n => n + 1);
        return x + valor - 100;
      }
      return x + valor;
    });
  };
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

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>POKÉGOTCHI</Text>
      <Card style={styles.pokemon}>
        <Image source={{ uri: pokemon.image }} style={styles.image} />
        <Text style={styles.message}>{mensagem}</Text>
      </Card>
      <Card style={styles.card}>
        <Text style={styles.name}>{pokemon.name.toUpperCase()}</Text>
        <Text>#{pokemon.id} • Tipo: {pokemon.type.toUpperCase()}</Text>
        <Text>Altura: {pokemon.height / 10} m</Text>
        <Text>Peso: {pokemon.weight / 10} kg</Text>
        <View style={styles.row}>
          <Text>NÍVEL {nivel}</Text>
          <Text>{xp}/100 XP</Text>
        </View>
        <ProgressBar progress={xp / 100} />
      </Card>
      <Card style={styles.card}>
        <Text style={styles.section}>CUIDADOS</Text>
        <Text>Fome: {fome}%</Text>
        <ProgressBar progress={fome / 100} />
        <Text>Felicidade: {felicidade}%</Text>
        <ProgressBar progress={felicidade / 100} />
        <Text>Energia: {energia}%</Text>
        <ProgressBar progress={energia / 100} />
        <Text>Higiene: {higiene}%</Text>
        <ProgressBar progress={higiene / 100} />
      </Card>
      <Card style={styles.card}>
        <Text style={styles.section}>AÇÕES</Text>
        <Button mode="contained" onPress={alimentar}>ALIMENTAR</Button>
        <Button mode="contained" onPress={brincar}>BRINCAR</Button>
        <Button mode="contained" onPress={dormir}>DORMIR</Button>
        <Button mode="contained" onPress={limpar}>LIMPAR</Button>
        <Button mode="contained" onPress={treinar}>TREINAR +26 XP</Button>
      </Card>
    </ScrollView>
  );
}
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