import React from 'react';
import { Link } from 'react-router-dom';

export default ({customer}) => {
  return (
    <tr>
        <td>{customer.index}</td>
        <td>{customer.name}</td>
        <td>{customer.address}</td>
        <td>{customer.phone}</td>
        <td><Link to={`/products/${customer.id}/edit`}>edit</Link></td>
    </tr>
  );
};