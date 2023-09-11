const initState = {
  count: 0,
  cartProduct: [],
};
const CartReducer = (state = initState, {type, payload}) => {
  const index = state.cartProduct.findIndex(x => x.id === payload.id);
  const data = state.cartProduct.find(x => x.id === payload.id);
  switch (type) {
    case 'addCartItem':
      return {
        ...state,
        cartProduct: [...state.cartProduct, payload],
      };

    case 'Decrement':
      console.log(payload);
      if (data?.quantity > 1) {
        return {
          ...state,
          cartProduct: [
            ...state.cartProduct.slice(0, index),
            {...data, quantity: data?.quantity - payload.quantity},
            ...state.cartProduct.slice(index + 1),
          ],
        };
      } else {
        return {
          ...state,
          cartProduct: [
            ...state.cartProduct.slice(0, index),
            ...state.cartProduct.slice(index + 1),
          ],
        };
      }

    case 'Increment':
      return {
        ...state,
        cartProduct: [
          ...state.cartProduct.slice(0, index),
          {...data, quantity: payload.quantity + data?.quantity},
          ...state.cartProduct.slice(index + 1),
        ],
      };
    case 'countIncrement':
      return {
        ...state,
        count: state.count + payload,
      };
    case 'countDecrement':
      return {
        ...state,
        count: state.count - payload,
      };

    default:
      return state;
  }
};

export default CartReducer;
