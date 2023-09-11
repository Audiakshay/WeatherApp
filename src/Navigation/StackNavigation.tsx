import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Register from '../Screens/Register';
import Login from '../Screens/Login';
import DashBoard from '../Screens/Home';
import BuyPage from '../Components/BuyPage';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="DashBoard"
          component={DashBoard}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="BuyPage"
          component={BuyPage}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
