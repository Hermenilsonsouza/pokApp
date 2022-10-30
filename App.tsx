import React from 'react';
import Home from '@App/pages/home/home';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
