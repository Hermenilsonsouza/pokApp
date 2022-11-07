import React from 'react';
import {ListRenderItemInfo} from 'react-native';
import {typesPokemonProps} from '@App/redux/detailsPokemons';
import * as S from '../details.styles';

function PokemonsTypes({item}: ListRenderItemInfo<typesPokemonProps>) {
  return (
    <>
      <S.Text>{item.type.name}</S.Text>
    </>
  );
}

export default PokemonsTypes;
