import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  padding: 16px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: red;
  margin-top: 3%;
`;

export const Image = styled.Image`
  width: 50%;
  height: 30%;
  background-color: #f0f9d3;
  border-radius: 90px;
  border-width: 3px;
  border-color: red;
`;

export const TextContainer = styled.View`
  padding: 16px;
  background-color: #e3e3e3;
  border-radius: 8px;
  width: 100%;
  margin-top: 5%;
`;

export const Text = styled.Text`
  color: #111;
  font-weight: 500;
  margin-bottom: 5px;
  margin-right: 5px;
`;
export const RowText = styled.View`
  flex-direction: row;
`;
