import {View, Text} from 'react-native';
import React from 'react';
import StackNavigation from './src/Navigation/StackNavigation';
import {Provider} from 'react-redux';
import store from './src/Redux/Store/Store';
import {TailwindProvider} from 'tailwindcss-react-native';

const App = () => {
  return (
    <Provider store={store}>
      <TailwindProvider>
        <StackNavigation />
      </TailwindProvider>
    </Provider>
  );
};

export default App;
