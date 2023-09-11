import {combineReducers} from 'redux';
import CartReducer from './CartReducer';
import ProductsReducer from './ProductsReducer';
import BuyReducer from './BuyReducer';

const rootReducer = combineReducers({
  cart: CartReducer,
  products: ProductsReducer,
  buy: BuyReducer,
});

export default rootReducer;
