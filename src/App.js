import "./App.css";
import Welcome from "./components/Welcome";
import { Routes, Route } from "react-router-dom";
import AddBrand from "./components/AddBrand";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route exact path="/addBrand" element={<AddBrand />} />
        <Route exact path="/About" element={<AboutSection />} />
      </Routes>
    </div>
  );
}

export default App;
