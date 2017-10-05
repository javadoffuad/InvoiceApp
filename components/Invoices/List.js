import React from 'react';
import { render } from 'react-dom';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

const Title = () => (
    <Grid>
        <Row>
            <Col md={12}>
                <h1>Invoices list <Button>Create</Button></h1>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Customer</th>
                            <th>Discount</th>
                            <th colSpan={2}>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>edit</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    </Grid>
);

module.exports = Title;