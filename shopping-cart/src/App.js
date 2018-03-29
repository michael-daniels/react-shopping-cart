import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
import CartItems from './CartItems';
import AddItemForm from './AddItemForm'

class App extends Component {

  state = {
    items: [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ],
    products: [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ]
  }

  addItemFunction = (theItem) => {
    this.setState({
      items: this.state.items.concat({
        quantity: theItem.quantity,
        product: this.state.products.filter((product) => product.id == theItem.productID)[0]
      })
    })
  }

  render() {

    let copyrightYear = 2018;

    return (
      <div>
        <CartHeader />
        <CartItems cartItems = {this.state.items} />
        <AddItemForm allProducts = {this.state.products} addItemFunction={this.addItemFunction}/>
        <CartFooter year = {copyrightYear} />

      </div>
    );

  }
}

export default App;
