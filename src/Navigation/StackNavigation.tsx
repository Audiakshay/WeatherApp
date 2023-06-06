import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Flash from '../Screens/Flash';
import HomeScreen from '../Screens/HomeScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FlashScreen"
          component={Flash}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
