import React from 'react';
import * as S from './card.styles';

type cardType = {
  title: String;
  onPress: () => void;
};

const card = ({title, onPress}: cardType) => {
  return (
    <S.Container onPress={onPress}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default card;
