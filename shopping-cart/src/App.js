import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
import CartItem from './CartItem';

class App extends Component {
  render() {
    return (
      <div>
        <CartHeader />
        <CartItem />
        <CartFooter />

      </div>
    );
  }
}

export default App;
