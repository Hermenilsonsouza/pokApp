import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Card from '../card';

describe('<Card />', () => {
  it('should has one name', async () => {
    render(<Card title="caterpie" />);

    const title = screen.getByText('caterpie');

    expect(title.props.children).toEqual('caterpie');
  });
});
