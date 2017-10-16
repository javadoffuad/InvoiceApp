import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class DeleteConfirm extends React.Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide} bsSize="small" aria-labelledby="contained-modal-title-sm">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-sm">{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.primaryAction} bsStyle="primary">Save</Button>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
};

export default DeleteConfirm;