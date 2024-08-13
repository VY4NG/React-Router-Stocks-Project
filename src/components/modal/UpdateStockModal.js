import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

/* Destructured functions: showModal, closeUpdateModal, saveUpdatedStock, 
currentStock, and handleUpdateChange. This is needed so that the modal can 
successfully make changes and update the information on a current client. 

This will complete the PUT method or Update.

Used React Bootstrap for styling. */
function UpdateStockModal({ showModal, closeUpdateModal, saveUpdatedStock, currentStock, handleUpdateChange }) {
    if (!currentStock) return null;

    return (
        <Modal show={showModal} onHide={closeUpdateModal}>
            <Modal.Header closeButton>
                <Modal.Title>Update Position</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={saveUpdatedStock}>

                    {/* Render form fields and bind values to currentStock. 
                    Updating only the company name. */}
                    <Form.Group>
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={currentStock.company}
                            onChange={(e) => handleUpdateChange('company', e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Save Changes
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default UpdateStockModal;