import React from 'react';
import {Image, useWindowDimensions} from 'react-native';
import * as S from './headerList.styles';

const dimensions = {
  with: 900,
  height: 450,
};

const ratio = dimensions.height / dimensions.with;

const HeaderList = () => {
  const window = useWindowDimensions();
  const width = window.width;
  const height = width * ratio;
  return (
    <>
      <Image
        style={{width, height}}
        source={require('../../assets/images/allPokemons.jpg')}
      />
      <S.Container>
        <S.Title>Pokémons</S.Title>
      </S.Container>
    </>
  );
};

export default HeaderList;
