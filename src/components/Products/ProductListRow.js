import React from 'react';
import { Link } from 'react-router-dom';

export default ({index, product}) => {
  return (
    <tr>
        <td>{index}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td><Link to={`/products/${product.id}/edit`}>edit</Link></td>
    </tr>
  );
};