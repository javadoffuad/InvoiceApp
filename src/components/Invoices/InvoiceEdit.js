import React from 'react';
import { render } from 'react-dom';

import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

export default ({ match }) => (
    <Grid>
        <Row>
            <Col md={12}>
                <h1>Invoice Edit {match.params.id}</h1>
            </Col>
        </Row>
    </Grid>
);