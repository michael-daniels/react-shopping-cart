import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
import CartItem from './CartItem';

class App extends Component {
  render() {

    let copyrightYear = 2018;

    return (
      <div>
        <CartHeader />
        <CartItem />
        <CartFooter year={copyrightYear}/>

      </div>
    );
    
  }
}

export default App;
