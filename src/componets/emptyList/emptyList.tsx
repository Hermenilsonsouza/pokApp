import React from 'react';
import {Image, useWindowDimensions} from 'react-native';

const dimensions = {
  with: 900,
  height: 800,
};

const ratio = dimensions.height / dimensions.with;

const EmptyList: React.FC = () => {
  const window = useWindowDimensions();
  const width = window.width;
  const height = width * ratio;

  return (
    <>
      <Image
        style={{width, height}}
        source={require('../../assets/images/error.png')}
      />
    </>
  );
};

export default EmptyList;
