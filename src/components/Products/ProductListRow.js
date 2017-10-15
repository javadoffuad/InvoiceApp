import React from 'react';
import { Link } from 'react-router-dom';

export default ({product}) => {
  return (
    <tr>
        <td>{product.index}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td><Link to={`/products/${product.id}/edit`}>edit</Link></td>
    </tr>
  );
};