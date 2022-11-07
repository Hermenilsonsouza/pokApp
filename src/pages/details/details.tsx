import React, {useEffect} from 'react';
import {pokemonTypes} from '@App/redux/pokemons';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '@App/redux/store';
import * as S from './details.styles';
import {fetchDetailsPokemons} from '@App/redux/detailsPokemons';
import {FlatList} from 'react-native-gesture-handler';
import {typesPokemonProps, abilitiesProps} from '@App/redux/detailsPokemons';
import Abilities from './components/abilities';
import PokemonsTypes from './components/pokemonsTypes';

const Details = (props: {route: {params: {item: pokemonTypes}}}) => {
  const {url, name} = props.route.params.item;
  const dispatch = useDispatch<AppDispatch>();
  const pokemons = useSelector(
    (state: RootState) => state.detailsPokemon.detailsPokem,
  );
  useEffect(() => {
    dispatch(fetchDetailsPokemons(url));
  }, []);
  const {height, weight, id, types, abilities} = pokemons;

  return (
    <S.Container>
      <S.Image
        resizeMode="contain"
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        }}
      />
      <S.Title>{name}</S.Title>
      <S.TextContainer>
        <S.Text>Height: {height}</S.Text>
        <S.Text>Weight: {weight}</S.Text>
        <S.RowText>
          <S.Text>Types:</S.Text>
          <FlatList<typesPokemonProps>
            data={types}
            horizontal
            keyExtractor={item => item.slot.toString()}
            renderItem={PokemonsTypes}
          />
        </S.RowText>
        <S.RowText>
          <S.Text>Abilities:</S.Text>
          <FlatList<abilitiesProps>
            data={abilities}
            horizontal
            keyExtractor={item => item.ability.name}
            renderItem={Abilities}
          />
        </S.RowText>
      </S.TextContainer>
    </S.Container>
  );
};

export default Details;
