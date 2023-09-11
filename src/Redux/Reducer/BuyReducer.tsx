const initState = {
  productDetail: [],
};

const BuyReducer = (state = initState, {type, payload}) => {
  switch (type) {
    case 'productClicked':
      return {
        ...state,
        productDetail: [payload],
      };
    default:
      return state;
  }
};

export default BuyReducer;
