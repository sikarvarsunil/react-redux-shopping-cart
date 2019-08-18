import React from 'react';

const Product = ({id, image, name, price, quantity, addToCart, removeFromCart, isInCart }) => {
  return (
      <div className='item' id={id}>
        <div><img src={image}/></div>
        <h3>{name}</h3>
         <p>{price}</p>
         <button className={isInCart ? 'btn btn-danger' : 'btn btn-primary'}
              onClick={()=> addToCart({id, image, name, price, quantity})}>
              {isInCart ? 'Remove' : 'Add to cart'}
          </button>
      </div>
  )
}

export default Product;