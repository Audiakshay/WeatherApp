import {combineReducers} from 'redux';
import ForecastReducer from './ForecastReducer';
const rootReducer = combineReducers({
  ForecastReducer,
});

export default rootReducer;
