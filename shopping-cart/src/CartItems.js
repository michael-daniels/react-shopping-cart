import React from 'react';
import CartItem from './CartItem';

const CartItems = (props) => {
  /*console.log("cart items props", props.cartItems)*/
  let allItems = props.cartItems.map((item, idx) => {
    return <CartItem key={idx} item={item} />
  })
    return (
      <div className="container">
        <h1>Cart Items</h1>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-8"><b>Product</b></div>
              <div className="col-md-2"><b>Price</b></div>
              <div className="col-md-2"><b>Quantity</b></div>
            </div>
          </div>
        </div>
              {allItems}
      </div>
    )
}

export default CartItems;
