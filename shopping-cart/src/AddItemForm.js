import React, { Component } from 'react';

class AddItemForm extends Component {

  state = {
    quantity: 0,
    productID: 40
  }

  submitHandler = (event) => {
      event.preventDefault()
      this.props.addItemFunction(this.state)
      this.setState({
      quantity: 0,
      productId: 40
    })
  }

  render() {
      console.log("add item form props", this.props)
      let addProductList = this.props.allProducts.map((item, idx) => {
        return (
          <option value={item.id}>{item.name}</option>
        )
      })
      return (
        <form className="form-group form-inline justify-content-center" onSubmit={this.submitHandler}>
          <select className="form-control"
            name="productID"
            onChange={(event) => {this.setState({productID: event.target.value})}}
            value={this.state.productID}
          >
            <option>Please select a product...</option>
            {addProductList}
          </select>
          <input className="form-control quantity-input"
            type="number"
            name="quantity"
            placeholder="Quantity"
            onChange={(event) => {this.setState({quantity: event.target.value})}}
            value={this.state.quantity}
          />
          <button type="submit" className="btn btn-primary">Add to Cart</button>
        </form>
      )
  }
}

export default AddItemForm;
