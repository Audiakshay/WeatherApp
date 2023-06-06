/* eslint-disable react-native/no-inline-styles */
import {View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axiosInstance from '../utils/Axios';

const Flash = ({navigation}) => {
  setTimeout(() => navigation.navigate('HomeScreen'), 1000);

  ///////debounce/////////
  const InputSearch = useSelector(state => state.ForecastReducer.userInput);
  console.log('user', InputSearch);
  const [typedData, setTypeData] = useState('bangalore');

  ////////init loaction data//////////
  const dispatch = useDispatch();
  const getData = async () => {
    // const value = await fetch(
    //   'http://api.weatherapi.com/v1/forecast.json?key=23cdc20e94a34421964110528230506&q=bangalore&days=6&aqi=no&alerts=no',
    // ).then(data => data.json());
    const res = await axiosInstance.get(
      `${typedData}'&days=6&aqi=no&alerts=no'`,
    );
    const value = res.data;
    dispatch({type: 'fetch', payload: value});
    console.log(value);
  };
  useEffect(() => {
    getData();
  }, [InputSearch]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
      }}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Image
          source={require('../../assets/FlashScreen/weather-app.png')}
          style={{height: 100, width: 100}}
        />
      </View>
      <Image
        source={require('../../assets/FlashScreen/weatherApi.png')}
        style={{height: 100, width: 100}}
      />
    </View>
  );
};

export default Flash;
