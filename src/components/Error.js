import React from 'react';
import {
    Grid, Row, Col, Link
} from 'react-bootstrap';

const Container = () => (
    <Grid>
        <Row>
            <Col md={12}>
                <h1>Page not found <Link to="/">Home</Link></h1>
            </Col>
        </Row>
    </Grid>
);

module.exports = Container;