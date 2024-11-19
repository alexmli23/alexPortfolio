import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Developing from "./pages/Developing";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="relative">
      <BrowserRouter basename="/alexPortfolio">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Developing" element={<Developing />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

