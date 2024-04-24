// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./assets/Background.tsx";
import Home from "./pages/Home.tsx";
import Work from "./pages/Work.tsx";
import About from "./pages/About.tsx";
import Redfall from "./pages/subpages/Redfall.tsx";
import PaperSamurai from "./pages/subpages/PaperSamurai.tsx";
import "./App.css";

function App() {
  return (
    <Router>
      <main>
        <Background />
        <Routes key={location.pathname} location={location}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="about" element={<About />} />
          <Route path="work/redfall" element={<Redfall />} />
          <Route path="work/paper-samurai" element={<PaperSamurai />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
