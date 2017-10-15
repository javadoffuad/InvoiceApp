import React from 'react';
import { Table } from 'react-bootstrap';
import ProductsListRow from './ProductListRow';

export default ({products}) => {
  return (
    <Table responsive>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th colSpan={2}>Price</th>
            </tr>
        </thead>
        <tbody>
            {
                products.map((product, i) => 
                  <ProductsListRow key={++i} index={++i} product={product} />
                )
            }
        </tbody>
    </Table>
  );
};