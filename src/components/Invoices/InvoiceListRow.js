import React from 'react';
import { Link } from 'react-router-dom';

class InvoiceListRow extends React.Component{
  render() {
    const invoice = this.props.invoice;
    return (
      <tr>
          <td>{this.props.index}</td>
          <td>{invoice.customer_id}</td>
          <td>{invoice.discount}</td>
          <td>{invoice.total}</td>
          <td>{invoice.createdAt}</td>
          <td>
            <Link to={`/invoices/${invoice.id}/edit`}>edit</Link>
            <a href="#" onClick={this.props.deleteAction} style={{color: "red", marginLeft: "20px"}}>delete</a>
          </td>
      </tr>
    )
  }
}

export default InvoiceListRow;