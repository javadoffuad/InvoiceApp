import React from 'react';
import { NavLink } from 'react-router-dom';
import NewProduct from './NewProduct';
import DeleteConfirm from './DeleteConfirm';

class ProductListRow extends React.Component {
  render() {
    const product = this.props.product;

    return (
      <tr>
          <td>{product.index}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <a href="#">edit</a>
            <a onClick={this.props.deleteAction} href="#" style={{color: "red", marginLeft: "20px"}}>delete</a>
          </td>
      </tr>
    );
  }
}

export default ProductListRow; 