import React from 'react';
import { Form, Button } from 'react-bootstrap';

function validateFormInput(formInput) {
    return (formInput.initiativeValue && formInput.initiativeName);
}

function handleIntitiativeSubmission(event) {
    if (validateFormInput(event.target.form)) {
        console.log("make a call");
    }
    else {
        console.log("would not make a call");
    }
}

function AddInitiativeForm(props) {
    return (<Form>
          <Form.Row className="align-items-end">
            <Form.Group column="true" className="col-2">
              <Form.Label>Initiative</Form.Label>
              <Form.Control type="text" id="initiativeValue" />
            </Form.Group>

            <Form.Group column="true" className="col-8">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group column="true" className="col-1">
              <Button onClick={(e) => handleIntitiativeSubmission(e)}>Add</Button>
            </Form.Group>
          </Form.Row>
        </Form>);
}

export default AddInitiativeForm;