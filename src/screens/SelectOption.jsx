import React, { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { options } from "../options";

export default function SelectOption() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const setChekedOption = (el, id, label) => {
    const checked = el.target.checked;

    // if (checked) {
    //   console.log(selectedOptions);
    //   const option =
    //     selectedOptions.length < 1
    //       ? selectedOptions.find((c) => c.id !== id)
    //       : null;

    //   if (option) {
    //     const options = [...selectedOptions, { id, label }];
    //     setSelectedOptions(options);
    //   }
    // }
  };
  console.log(selectedOptions, "selectedOptions");

  return (
    <Row>
      {options.map((item) => (
        <Col sm={6} key={item.id} className="mb-3">
          <label htmlFor={`id-${item.id}`} className="pointer d-block">
            <Card border="primary" className="bg-info">
              <Card.Body>
                <Form.Check
                  inline
                  label={item.label}
                  name={item.id}
                  id={`id-${item.id}`}
                  type="checkbox"
                  onChange={(el) => setChekedOption(el, item.id, item.label)}
                />
              </Card.Body>
            </Card>
          </label>
        </Col>
      ))}
    </Row>
  );
}
