import React from 'react';
import {ActivityIndicator, Modal} from 'react-native';
import * as S from './loading.styles';

type loading = {
  load: boolean;
};

const Loading = ({load}: loading) => {
  return (
    <Modal visible={load}>
      <S.Container>
        <ActivityIndicator size="large" color="#0000ff" />
      </S.Container>
    </Modal>
  );
};

export default Loading;
