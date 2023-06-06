import {View, Text} from 'react-native';
import React from 'react';
import StackNavigation from './src/Navigation/StackNavigation';
import {Provider} from 'react-redux';
import store from './src/Redux/Store/Store';

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
};

export default App;
