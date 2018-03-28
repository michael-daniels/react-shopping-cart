import React from 'react';

const AddItemForm = (props) => {
  return (
    <form className="form-group form-inline justify-content-center">
      <input className="form-control" type="text" name="productName" placeholder="Product Name"/>
      <input className="form-control" type="text" name="priceCents" placeholder="Price"/>
      <input className="form-control" type="text" name="quantity" placeholder="Quantity"/>
      <button className="btn btn-primary form-control" type="button" onClick={props.addItem}>Add Item</button>
    </form>
  )
}

export default AddItemForm;
