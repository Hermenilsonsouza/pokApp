import {pokemonTypes} from '@App/redux/pokemons';

export type RootStackParamList = {
  Home: undefined;
  Details: {item: pokemonTypes};
};
