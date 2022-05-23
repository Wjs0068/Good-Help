import "./App.css";
import Welcome from "./components/Welcome";
import { Routes, Route } from "react-router-dom";
import AddBrand from "./components/AddBrand";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route exact path="/addBrand" element={<AddBrand />} />
      </Routes>
    </div>
  );
}

export default App;
