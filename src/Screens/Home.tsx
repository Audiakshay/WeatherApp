import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {useEffect, useState} from 'react';

import Mens from './HomeTopNavigation/Mens';
import Womens from './HomeTopNavigation/Womens';
import Electronics from './HomeTopNavigation/Electronics';
import Artifacts from './HomeTopNavigation/Artifacts';
import {Dimensions} from 'react-native';
import HomeHeader from '../Components/HomeHeader';
import {useDispatch} from 'react-redux';
import axiosInstance from '../utils/Axios';

const Tab = createMaterialTopTabNavigator();

const DashBoard = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const dispatch = useDispatch();

  const fetchedData = async () => {
    const res = await axiosInstance.get('https://fakestoreapi.com/products');
    const val = await res.data;
    // console.log(val);
    dispatch({type: 'product', payload: val});
  };
  useEffect(() => {
    fetchedData();
  }, []);
  return (
    <>
      <HomeHeader />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {backgroundColor: '#000000'},
          tabBarLabelStyle: {fontSize: 9, fontWeight: 'bold', color: '#FFFFFF'},
          tabBarItemStyle: {width: windowWidth / 4},
          tabBarIndicatorStyle: {backgroundColor: '#FFFFFF'},
        }}>
        <Tab.Screen name="Mens" component={Mens} />
        <Tab.Screen name="Womens" component={Womens} />
        <Tab.Screen name="Electronics" component={Electronics} />
        <Tab.Screen name="Artifacts" component={Artifacts} />
      </Tab.Navigator>
    </>
  );
};

export default DashBoard;
