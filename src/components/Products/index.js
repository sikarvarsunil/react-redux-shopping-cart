import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import Product from './Product';
import './Products.css';

const Products = () => {
  const items = useSelector((state) => state.products);
  const dispatch = useDispatch();
    const addToCart = (pItem)=> {
      dispatch({
        type: 'cart/ADD',
        payload:pItem
      });
    }
    const removeFromCart = (id)=> {
      dispatch({
        type: 'cart/REMOVE',
        payload:id
      });
    };
  return <div className='products-list'>
    {items.map((item) => <Product addToCart={addToCart} {...item}/>)}
  </div>
}

export default Products;