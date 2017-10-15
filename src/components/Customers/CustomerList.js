import React from 'react';
import { Table } from 'react-bootstrap';
import CustomerListRow from './CustomerListRow';

export default ({customers}) => {
  return (
    <Table responsive>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Address</th>
                <th colSpan={2}>Phone</th>
            </tr>
        </thead>
        <tbody>
            {
                customers.map((customer, i) => {
                    customer.index = ++i;
                    return <CustomerListRow key={customer.index} customer={customer}/>
                })
            }
        </tbody>
    </Table>
  );
};