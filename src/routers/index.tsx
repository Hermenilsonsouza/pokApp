import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from './routerTypes';
import {Provider} from 'react-redux';
import {store} from '../redux/store';

const RootStack = createNativeStackNavigator<RootStackParamList>();

import Home from '@App/pages/home/home';
import Details from '@App/pages/details/details';

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <RootStack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <RootStack.Screen name="Home" component={Home} />
          <RootStack.Screen name="Details" component={Details} />
        </RootStack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default Router;
