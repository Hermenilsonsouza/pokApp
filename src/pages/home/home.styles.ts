import styled from 'styled-components/native';
import {TextInput} from 'react-native-paper';

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  padding: 16px;
`;

export const Input = styled(TextInput)`
  margin-bottom: 12px;
`;
