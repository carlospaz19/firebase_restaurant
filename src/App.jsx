import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";
import Menu from "./components/Menu";
import Reservations from "./components/Reservations";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
