import { useContext, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Store } from "../Store";

export default function AddOption() {
  const [counter, setCounter] = useState(1);
  const [rows, setRows] = useState([{ id: 0, text: "" }]);
  const { state, dispatch } = useContext(Store);

  const submitDataHandler = (event) => {
    event.preventDefault();
    dispatch({ type: "SAVE_ROWS", payload: rows });
    dispatch({ type: "SHOW_FIELDS", payload: false });
    dispatch({ type: "RENDER_COMPONENT", payload: 1 });
  };

  const addRowHandler = () => {
    const text = { id: counter, text: "" };
    const newRow = [...rows, text];
    setRows(newRow);
  };

  const removeRowHandler = (id) => {
    const filterArr = rows.filter((el) => el.id !== id);
    setRows(filterArr);
  };

  const getRowValueHandler = (el, id) => {
    const value = el.target.value;
    const element = rows.find((item) => item.id === id);
    const updateRows = (element.text = value);
  };
  return (
    <>
      <div className="mb-5">
        <h3 className="mb-0 dark-blue title">
          Please enter quality standards:
        </h3>
        <p className="dark-blue subtitle">The services provided must...</p>
      </div>

      <Form onSubmit={submitDataHandler}>
        <div className="rows">
          {rows.map((item, index) => (
            <Row key={item.id}>
              <Col sm={1} className="pe-0">
                <Button
                  className="w-44 h-44 text-white rounded-circle bg-dark-blue"
                  variant="none"
                >
                  {index + 1}
                </Button>
              </Col>
              <Col sm={10} className="ps-2 pe-0">
                <div className="custom__input mb-3">
                  <input
                    className="p-2 w-100"
                    placeholder="Standard"
                    type="text"
                    required
                    onChange={(el) => getRowValueHandler(el, item.id)}
                  />
                </div>
              </Col>
              <Col sm={1} className="ps-0">
                {rows.length > 1 && (
                  <Button
                    variant="danger"
                    onClick={() => removeRowHandler(item.id)}
                    className="small remove-button w-44 h-44 rounded-circle text-bold"
                    type="button"
                  >
                    <i className="fa-solid fa-minus"></i>
                  </Button>
                )}
              </Col>
            </Row>
          ))}
        </div>

        <Row>
          <Col sm={1}></Col>
          <Col sm={10} className="ps-2">
            <Button
              variant="primary"
              className="w-25 rounded-0"
              onClick={() => addRowHandler(setCounter(counter + 1))}
              type="buttom"
            >
              Add row
            </Button>
          </Col>
          <Col className="text-center mt-5">
            <button type="submit" className="next custom__button">
              Next
            </button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
