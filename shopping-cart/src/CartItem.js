import React from 'react';


const CartItem = (props) => {
  console.log("cart item props", props)
    return (
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">{props.item.product.name}</div>
            <div className="col-md-2">${(props.item.product.priceInCents/100).toFixed(2)}</div>
            <div className="col-md-2">{props.item.quantity}</div>
          </div>
        </div>
      </div>
    )
}

export default CartItem;
