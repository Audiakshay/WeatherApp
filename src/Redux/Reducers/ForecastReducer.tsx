import {View, Text} from 'react-native';
import React, {useState} from 'react';

const initState = {
  weatherData: [],
  userInput: 'bangalore',
};

const ForecastReducer = (state = initState, {type, payload}) => {
  if (type === 'fetch') {
    return {
      ...state,
      weatherData: payload,
    };
  } else if (type === 'userData') {
    return {
      ...state,
      userInput: payload,
    };
  }
  return state;
};

export default ForecastReducer;
