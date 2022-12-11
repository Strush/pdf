import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./screens/HomePage";
import PdfPage from "./screens/PdfPage";

function App() {
  return (
    <BrowserRouter>
      {/* <div className="app">
        <div className="container"> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pdf" element={<PdfPage />} />
      </Routes>
      {/* </div>
      </div> */}
    </BrowserRouter>
  );
}

export default App;
