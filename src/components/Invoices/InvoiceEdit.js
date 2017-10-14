import React from 'react';
import {
    Grid, Row, Col, Button, Table
 } from 'react-bootstrap';

export default ({ match }) => (
    <Grid>
        <Row>
            <Col md={12}>
                <h1>Edit Invoice</h1>
            </Col>
        </Row>
        <Row>
            <Col md={12}>{match.params.id}</Col>
        </Row>
    </Grid>
);