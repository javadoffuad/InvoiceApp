import React from 'react';
import { render } from 'react-dom';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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