import React from "react";
import { Form, Button } from "react-bootstrap";

export default function CommentForm(props) {
  console.log(props, "Whats in here");
  return (
    <Form method="POST" onSubmit={props.onSubmit}>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Comment!</Form.Label>
        <Form.Control
          type="text"
          name="text"
          placeholder="comment"
          onChange={props.onChange}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox"></Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

/* <form onSubmit={props.onSubmit}>
<label>Comment:</label>
<input
  type="text"
  name="comment"
  placeholder="comment"
  value={props.values.text}
  onChange={props.onChange}
/>
<button type="Submit">POST!</button>
</form> */
