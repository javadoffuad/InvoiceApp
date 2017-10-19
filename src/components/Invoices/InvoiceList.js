import React from 'react';
import { Table } from 'react-bootstrap';
import InvoiceListRow from './InvoiceListRow';

export default ({invoices}) => {
  return (
    <Table responsive>
        <thead>
            <tr>
                <th>#</th>
                <th>Customer</th>
                <th>Discount</th>
                <th>Total</th>
                <th colSpan={2}>Created</th>
            </tr>
        </thead>
        <tbody>
            {
                invoices.map((invoice, i) => {
                    const index = ++i;
                    return <InvoiceListRow key={index} index={index} invoice={invoice}/>
                })
            }
        </tbody>
    </Table>
  );
};