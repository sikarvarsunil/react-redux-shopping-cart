import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CartItem from './CartItem';
import './CartItem.css';


const Cart = ({id, image, name, price, removeFromCart, isInCart }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  removeFromCart = (item)=> {
    console.log(item);
    dispatch({
      type: 'cart/REMOVE',
      payload: item
    });
  };
  return (
      <div className='cart-body'>
        <h3>cart {cart.count}</h3>
        <ul>
        {cart.items.length > 0 && cart.items.map((item) => {
          return <CartItem {...item} removeFromCart={removeFromCart}/>
        }
        )}
        </ul>
        <div className="cart-total">Total <span>{cart.total}</span> $</div>
      </div>
  )
}

export default Cart;