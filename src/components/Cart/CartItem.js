import React from 'react';

const CartItem = ({id, image, name, price, quantity, removeFromCart}) => <li className='cart-item' id = {id}>
    <div className='cart-item_img'><img src={image}/></div> 
    <div className='cart-item_name'>{name}</div> 
    <div className='cart-item_price'>{price}$</div> 
    <div className='cart-item_quantity'><input type="number" min="1" width="20"  value={quantity}/></div> 
    <div className='cart-item_remove'>
        <button className={'btn btn-secondary'}
          onClick={()=> removeFromCart({id, price})}>X
        </button>
    </div> 
  </li>

export default CartItem;