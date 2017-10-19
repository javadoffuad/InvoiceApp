import React from 'react';
import { Link } from 'react-router-dom';

export default ({index, invoice}) => {
  return (
    <tr>
        <td>{index}</td>
        <td>{invoice.customer_id}</td>
        <td>{invoice.discount}</td>
        <td>{invoice.total}</td>
        <td>{invoice.createdAt}</td>
        <td><Link to={`/invoices/${invoice.id}/edit`}>edit</Link></td>
    </tr>
  );
};