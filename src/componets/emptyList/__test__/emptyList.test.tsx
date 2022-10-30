import React from 'react';
import {render} from '@testing-library/react-native';
import EmptyList from '../emptyList';

describe('<EmptyList />', () => {
  const components = () => render(<EmptyList />);

  it('should render <EmptyList />', () => {
    const rendered = components();
    expect(rendered).toMatchSnapshot();
  });
});
