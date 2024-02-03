import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Adjust the import path according to your file structure

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* You can place a navbar or any other static component here */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more Route components here for additional pages */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
