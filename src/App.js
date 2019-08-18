import React from 'react';
import logo from './logo.svg';
import Header from './components/Header/';
import Products from './components/Products/';
import Cart from './components/Cart/';
import ProductData from './data';
import {useSelector} from 'react-redux'
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Header logo={logo}/>
      <Products/>
      <Cart/>
    </div>
  );
}

export default App;
