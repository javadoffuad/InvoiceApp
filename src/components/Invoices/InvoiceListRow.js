import React from 'react';
import { Link } from 'react-router-dom';

export default ({invoice}) => {
  return (
    <tr>
        <td>{invoice.index}</td>
        <td>{invoice.customer_id}</td>
        <td>{invoice.discount}</td>
        <td>{invoice.total}</td>
        <td>{invoice.createdAt}</td>
        <td><Link to={`/products/${invoice.id}/edit`}>edit</Link></td>
    </tr>
  );
};