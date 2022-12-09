import { useContext, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Store } from "../Store";

export default function AddOption() {
  const [counter, setCounter] = useState(1);
  const [rows, setRows] = useState([{ id: 0, text: "" }]);
  const { state, dispatch } = useContext(Store);

  const updateData = (event) => {
    event.preventDefault();
    dispatch({ type: "SAVE_ROWS", payload: rows });
    dispatch({ type: "SHOW_FIELDS", payload: false });
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
      <div className="rows">
        {rows.map((item, index) => (
          <Row key={item.id}>
            <Col sm={1} className="pe-0">
              <Button className="w-40 h-40 rounded-circle">{index + 1}</Button>
            </Col>
            <Col sm={9}>
              <Form.Control
                className="mb-3"
                placeholder="Please enter a text"
                type="text"
                required
                onChange={(el) => getRowValueHandler(el, item.id)}
              />
            </Col>
            <Col sm={1}>
              {rows.length > 1 && (
                <Button
                  variant="danger"
                  onClick={() => removeRowHandler(item.id)}
                  className="small"
                  type="button"
                >
                  Remove
                </Button>
              )}
            </Col>
          </Row>
        ))}
      </div>

      <Row>
        <Col sm={1}></Col>
        <Col sm={10}>
          <Button
            variant="primary"
            className="w-25"
            onClick={() => addRowHandler(setCounter(counter + 1))}
            type="buttom"
          >
            Add row
          </Button>
        </Col>
        <Col className="text-center mt-5">
          <Button
            variant="warning"
            onClick={updateData}
            className="next w-25"
            type="submit"
          >
            Next
          </Button>
        </Col>
      </Row>
    </>
  );
}
