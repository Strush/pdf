import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export default function RowElement({ index, removeRowHandler }) {
  return (
    <Form>
      <Row>
        <Col sm={1} className="pe-0">
          <Button className="w-40 h-40 rounded-circle">{index}</Button>
        </Col>
        <Col sm={10}>
          <Form.Group className="mb-3" controlId="formRow">
            <Form.Control type="text" placeholder="Please enter a text" />
          </Form.Group>
        </Col>
        <Col sm={1}>
          <Button
            variant="danger"
            onClick={() => removeRowHandler(index)}
            className="small"
            type="button"
          >
            Remove
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
