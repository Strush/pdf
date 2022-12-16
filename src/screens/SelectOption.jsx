import React, { useContext, useState } from "react";

import {
  Button,
  Card,
  Col,
  Form,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { options } from "../options";
import { Store } from "../Store";

export default function SelectOption({ standard, rowsCount }) {
  const [isChecked, setIsChecked] = useState({
    id: 0,
    checked: false,
    selected: [],
  });

  const { state, dispatch } = useContext(Store);
  const { page } = state;

  const setChekedOption = (el, item) => {
    const { id, label } = item;
    const checked = el.target.checked;
    let variationIds = item.variation.map((v) => v.id);

    if (isChecked) {
      setIsChecked({
        id,
        checked,
        standard,
        variationIds,
        selected: [...isChecked.selected, { id, label, variationIds }],
      });
    }

    if (!checked) {
      const selected = isChecked.selected.filter((item) => item.id !== id);
      setIsChecked({ ...isChecked, selected });
    }
  };

  const renderNextComponent = (event) => {
    let variationIds = [];
    isChecked.selected.forEach((item) => {
      item.variationIds.forEach((el) => {
        variationIds.push(el);
      });
    });

    variationIds = [...new Set(variationIds)];

    event.preventDefault();
    dispatch({ type: "RENDER_COMPONENT", payload: page + 1 });
    dispatch({ type: "SAVE_OPTIONS", payload: { ...isChecked, variationIds } });
  };

  return (
    <Form onSubmit={renderNextComponent}>
      <Row className="small-block">
        {options.map((item) => (
          <Col md={6} key={item.id} className="mb-3">
            <Card
              border="none"
              className={
                isChecked.selected.find((i) => i.id === item.id)
                  ? "bg-dark-blue rounded-0"
                  : "bg-secondary rounded-0"
              }
            >
              <Card.Body className="d-flex position-relative py-12 rounded-0 card__option justify-content-center">
                <Form.Check
                  inline
                  label={item.label}
                  name={`selected-` + item.id}
                  id={`id-${item.id}`}
                  type="checkbox"
                  className="selected__option"
                  onChange={(el) => setChekedOption(el, item)}
                />
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="button-tooltip-2">{item.info}</Tooltip>}
                >
                  {({ ref, ...triggerHandler }) => (
                    <Button
                      variant="none"
                      {...triggerHandler}
                      className="d-inline-flex align-items-center"
                    >
                      <div className="info-icon" ref={ref}>
                        <i className="fa-sharp fa-solid fa-info text-white"></i>
                      </div>
                    </Button>
                  )}
                </OverlayTrigger>
              </Card.Body>
            </Card>
          </Col>
        ))}
        <Col sm={12} className="text-center mt-3 mt-sm-5">
          <button
            type="submit"
            className="next custom__button"
            disabled={isChecked.selected.length === 0}
          >
            {page === rowsCount - 1 ? (
              <Link className="text-white text-decoration-none" to="/pdf">
                Generate project roadmap
              </Link>
            ) : (
              "Next"
            )}
          </button>
        </Col>
      </Row>
    </Form>
  );
}
