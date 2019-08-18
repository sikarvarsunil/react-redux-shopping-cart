import ProductData from '../../data';
import CONSTANT from '../constants';

// reducer
const productReducer = (state=ProductData, action={}) => {
  switch(action.type) {
    case CONSTANT.PRODUCT_DATA:
      return {
        ...state
      }
    default:
      return state;
  } 
}

export default productReducer;