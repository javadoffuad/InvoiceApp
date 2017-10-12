import React from 'react';

import {
    Grid, Row, Col, Button, Table
 } from 'react-bootstrap';

export default ({ match }) => (
    <Grid>
        <Row>
            <Col md={12}>
                <h1>Invoice Edit {match.params.id}</h1>
            </Col>
        </Row>
    </Grid>
);