import React from 'react';
import * as S from './card.styles';

type cardType = {
  title: String;
};

const card = ({title}: cardType) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default card;
