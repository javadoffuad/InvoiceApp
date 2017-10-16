import React from 'react';

class CustomerListRow extends React.Component {
  render() {
    const customer = this.props.customer;

    return (
    <tr>
        <td>{customer.index}</td>
        <td>{customer.name}</td>
        <td>{customer.address}</td>
        <td>{customer.phone}</td>
        <td>
          <a onClick={this.props.editAction} href="#">edit</a>
          <a onClick={this.props.deleteAction} href="#" style={{color: "red", marginLeft: "20px"}}>delete</a>
        </td>
    </tr>
    );
  }
}

export default CustomerListRow;