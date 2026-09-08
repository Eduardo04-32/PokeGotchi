export const buscarPokemon = async (nome: string) => {
  const resposta = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${nome}`
  );

  const dados = await resposta.json();

  return {
    id: dados.id,
    name: dados.name,
    image: dados.sprites.front_default,
    type: dados.types[0].type.name,
    height: dados.height,
    weight: dados.weight,
  };
};