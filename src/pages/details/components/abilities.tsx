import React from 'react';
import {ListRenderItemInfo} from 'react-native';
import {abilitiesProps} from '@App/redux/detailsPokemons';
import * as S from '../details.styles';

function Abilities({item}: ListRenderItemInfo<abilitiesProps>) {
  return (
    <>
      <S.Text>{item.ability.name}</S.Text>
    </>
  );
}

export default Abilities;
