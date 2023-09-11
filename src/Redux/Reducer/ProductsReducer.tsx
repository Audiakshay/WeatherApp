const initState = {
  fakeApi: [],
};

const ProductsReducer = (state = initState, {type, payload}) => {
  if (type === 'product') {
    return {
      ...state,
      fakeApi: payload,
    };
  }
  return state;
};

export default ProductsReducer;
