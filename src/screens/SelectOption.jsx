import React, { useContext, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import ModalOption from "../components/ModalOption";
import { options } from "../options";
import { Store } from "../Store";

export default function SelectOption({ standard }) {
  const [isChecked, setIsChecked] = useState([]);
  // const [allOptions, setAllOptions] = useState([]);
  const [showData, setShowData] = useState({ show: false, data: {} });

  const { state, dispatch } = useContext(Store);
  const { page } = state;

  const setChekedOption = (el, item) => {
    const { id, label, active } = item;

    const checked = el.target.checked;
    const element = isChecked.find((i) => i.id === id);
    if (!element) {
      setIsChecked([...isChecked, { id, checked, label, active }]);
    }

    if (!checked) {
      const removeElement = isChecked.filter((item) => item.id !== id);
      setIsChecked(removeElement);
    }
  };

  const renderNextComponent = (event) => {
    event.preventDefault();
    dispatch({ type: "RENDER_COMPONENT", payload: page + 1 });
    const newOption = { ...isChecked, standard };
    dispatch({ type: "SAVE_OPTIONS", payload: [newOption] });
  };

  const showModalData = (data) => {
    setShowData({ show: true, data });
  };

  return (
    <Form onSubmit={renderNextComponent}>
      <Row className="small-block">
        {options.map((item) => (
          <Col sm={6} key={item.id} className="mb-3">
            <Card
              border="none"
              className={
                isChecked.find((i) => i.id === item.id)
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

                <div className="info-icon" onClick={() => showModalData(item)}>
                  <i className="fa-sharp fa-solid fa-info text-white"></i>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
        <Col sm={12} className="text-center mt-5">
          <button type="submit" className="next custom__button">
            Next
          </button>
        </Col>
      </Row>

      <ModalOption
        data={showData}
        setShowData={setShowData}
        standard={standard}
      />
    </Form>
  );
}
