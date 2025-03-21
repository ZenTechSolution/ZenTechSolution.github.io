import logo from "./logo.svg";
import "./App.css";
import { Landing } from "./Pages/Landing";
import { ServicePage } from "./Pages/ServicePage";
import { AboutUs } from "./Pages/AboutUs";
import { ContactPage } from "./Pages/ContactPage";
import { Teams } from "./Pages/Teams";
import { Projects } from "./Pages/Projects";
import "./Css/General.css";
import "./Css/Profile.css";
import "./Css/Projects.css";
import "./Css/Responsive.css";
import "./Css/Classes.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { fetchJsonData } from "./Controller/database";

function App() {
  fetchJsonData();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services/:id" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project/:id" element={<Projects />} />
        <Route path="/team/:id" element={<Teams />} />
      </Routes>
    </Router>
  );
}

export default App;
