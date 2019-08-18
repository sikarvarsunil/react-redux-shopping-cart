import CONSTANT from '../constants';
// reducer
const initialState = {
    items: [], // array of product
    count: 0,
    total: 0,
    currency: 'EUR'
};

const cartReducer = (state=initialState, action={}) => {
  switch(action.type) {
    case CONSTANT.CART_ADD:
      return {
        ...state,
        count: state.count + 1,
        items:[...state.items, action.payload],
        total: state.total + action.payload.price
      }
    case CONSTANT.CART_REMOVE:
      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : 0,
        items: state.items.filter(item => item.id !== action.payload.id),
        total: state.total > 0 ? state.total - action.payload.price : 0
      };
    default:
      return state;
  } 
}

export default cartReducer;