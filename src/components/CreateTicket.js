import React from "react";
import { Form, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

export default function CreateEvent(props) {
  return (
    <Form onSubmit={props.onSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          name="price"
          placeholder="Enter Price"
          value={props.values.price}
          onChange={props.onChange}
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows="3"
          name="description"
          value={props.values.description}
          onChange={props.onChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mr-1">
        Submit
      </Button>
      <Link to="/">
        <Button variant="danger">Cancel</Button>
      </Link>
    </Form>
  );
}
