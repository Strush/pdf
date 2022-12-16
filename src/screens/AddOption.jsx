import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Store } from "../Store";

export default function AddOption() {
  const [counter, setCounter] = useState(1);
  const [rows, setRows] = useState([{ id: 0, text: "" }]);
  const { state, dispatch } = useContext(Store);

  const submitDataHandler = (event) => {
    event.preventDefault();
    dispatch({ type: "SAVE_ROWS", payload: rows });
    dispatch({ type: "SHOW_FIELDS", payload: false });
    dispatch({ type: "RENDER_COMPONENT", payload: 0 });
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
      <div className="mb-3 mb-sm-5">
        <h3 className="mb-0 dark-blue title">
          Please enter quality standards:
        </h3>
        <p className="dark-blue subtitle">The services provided must...</p>
      </div>

      <Form onSubmit={submitDataHandler}>
        <div className="rows">
          {rows.map((item, index) => (
            <div className="rows__row" key={item.id}>
              <div className="rows__col">
                <Button
                  className="text-white rounded-circle bg-dark-blue custom__circle"
                  variant="none"
                >
                  {index + 1}
                </Button>
              </div>
              <div className="rows__col ms-2 ms-sm-3">
                <div className="custom__input mb-3">
                  <input
                    className="px-2 w-100"
                    placeholder="Standard"
                    type="text"
                    required
                    onChange={(el) => getRowValueHandler(el, item.id)}
                  />
                </div>
              </div>
              <div>
                {rows.length > 1 && (
                  <Button
                    variant="danger"
                    onClick={() => removeRowHandler(item.id)}
                    className="small remove-button rounded-circle text-bold custom__circle"
                    type="button"
                  >
                    <i className="fa-solid fa-minus"></i>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="rows__buttons">
          <div></div>
          <div>
            <Button
              variant="primary"
              className="rounded-0 add__row"
              onClick={() => addRowHandler(setCounter(counter + 1))}
              type="buttom"
            >
              Add row
            </Button>
          </div>
        </div>
        <div className="text-center mt-5">
          <button type="submit" className="next custom__button">
            Next
          </button>
        </div>
      </Form>
    </>
  );
}
