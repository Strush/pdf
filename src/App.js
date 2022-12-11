import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { Form } from "react-bootstrap";
import AddOption from "./screens/AddOption";
import SelectOption from "./screens/SelectOption";
import { Store } from "./Store";

function App() {
  const { state } = useContext(Store);
  const { isShow } = state;
  console.log(state, "state");

  return (
    <div className="app">
      <div className="container">
        <Form className="rows__box box">
          <h3 className="mb-4">
            It is a long established fact that a reader will be distracted by
            the readable content
          </h3>

          {isShow ? <AddOption /> : <SelectOption />}
        </Form>
      </div>
    </div>
  );
}

export default App;
