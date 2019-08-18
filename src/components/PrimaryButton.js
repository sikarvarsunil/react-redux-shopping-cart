import React from 'react';

const PrimaryButton = ({title, buttonType, addTocart }) => {
  <button className='primary-button' onClick={()=> addTocart()} type={buttonType}> {title}</button>
}

export default PrimaryButton;