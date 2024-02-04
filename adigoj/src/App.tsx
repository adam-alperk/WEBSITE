import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./assets/Background.tsx";
import Home from "./pages/Home.tsx";
import Work from "./pages/Work.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
