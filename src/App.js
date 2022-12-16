import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./screens/HomePage";
import Pdf from "./screens/Pdf";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/pdf" element={<Pdf />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
