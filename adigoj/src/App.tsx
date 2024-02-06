// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./assets/Background.tsx";
import Home from "./pages/Home.tsx";
import Work from "./pages/Work.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import "./App.css";

function App() {
  return (
    <Router>
      <main>
        <Background />
        <Routes key={location.pathname} location={location}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
