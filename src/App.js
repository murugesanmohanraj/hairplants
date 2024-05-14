import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage1 from "./hair/formpage1";
import Home from "./home";
import Location from "./home/location";
import HairTest from "./hair/hairTest";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/testForm" element={<FormPage1 />} />
          <Route path="/testHair" element={<HairTest />} />
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
