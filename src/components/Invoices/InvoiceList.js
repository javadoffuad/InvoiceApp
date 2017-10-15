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
                    invoice.index = ++i;
                    return <InvoiceListRow key={invoice.index} invoice={invoice}/>
                })
            }
        </tbody>
    </Table>
  );
};