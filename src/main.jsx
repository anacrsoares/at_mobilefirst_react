import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import "./index.css";

// Import Ats
import MenuHorizontal from "./AT01/MenuHorizontal";
import MenuVertical from "./AT02/MenuVertical";
import Gallery from "./AT03/Gallery";
import LayoutGrid from "./AT04/LayoutGrid";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AT01" element={<MenuHorizontal />} />
        <Route path="/AT02" element={<MenuVertical />} />
        <Route path="/AT03" element={<Gallery />} />
        <Route path="/AT04" element={<LayoutGrid />} />
      </Routes>
    </Router>
  </StrictMode>
);
