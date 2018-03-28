import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
import CartItems from './CartItems';
import AddItemForm from './AddItemForm'

class App extends Component {
  render() {

    let copyrightYear = 2018;
    let cartItemsList = [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ];
    const addItem = () => {
      alert("Heard Event")
    }

    return (
      <div>
        <CartHeader />
        <CartItems cartItems = {cartItemsList} />
        <AddItemForm addItem = {addItem}/>
        <CartFooter year={copyrightYear} />

      </div>
    );

  }
}

export default App;
