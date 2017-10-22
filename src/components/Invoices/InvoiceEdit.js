import React from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

export default ({match}) => {
    return <Grid>
                <Row>
                    <Col md={12}>
                        <h1>New invoice</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <p>invoice id {match.params.id}</p>
                    </Col>
                </Row>
            </Grid>
}