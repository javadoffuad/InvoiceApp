import React from 'react';

class ProductListRow extends React.Component {
  render() {
    const product = this.props.product;

    return (
      <tr>
          <td>{product.index}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <a onClick={this.props.editAction} href="#">edit</a>
            <a onClick={this.props.deleteAction} href="#" style={{color: "red", marginLeft: "20px"}}>delete</a>
          </td>
      </tr>
    );
  }
}

export default ProductListRow; 