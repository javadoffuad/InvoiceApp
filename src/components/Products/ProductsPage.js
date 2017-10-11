import React from 'react';
import { render } from 'react-dom';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class ProductsPage extends React.Component {
    componentDidMount() {
		document.title = "InvoiceApp | Products";
	}
    render() {
        return(
            <Grid>
                <Row>
                    <Col md={12}>
                        <h1>Product list <Button>Create</Button></h1>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

module.exports = ProductsPage;