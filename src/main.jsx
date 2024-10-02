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
import LayoutResponsivo from "./AT05/LayoutResponsivo";
import ListadeCompras from "./AT06/ListadeCompras";
import TasksEmployee from "./AT07/TasksEmployee";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AT01" element={<MenuHorizontal />} />
        <Route path="/AT02" element={<MenuVertical />} />
        <Route path="/AT03" element={<Gallery />} />
        <Route path="/AT04" element={<LayoutGrid />} />
        <Route path="/AT05" element={<LayoutResponsivo />} />
        <Route path="/AT06" element={<ListadeCompras />} />
        <Route path="/AT07" element={<TasksEmployee />} />
        <Route path="/AT08" element={<TasksEmployee />} />
        <Route path="/AT09" element={<TasksEmployee />} />
        <Route path="/AT10" element={<TasksEmployee />} />
        <Route path="/AT11" element={<TasksEmployee />} />
        <Route path="/AT12" element={<TasksEmployee />} />
        <Route path="/AT13" element={<TasksEmployee />} />
        <Route path="/AT14" element={<TasksEmployee />} />
        <Route path="/AT15" element={<TasksEmployee />} />
        <Route path="/AT16" element={<TasksEmployee />} />
      </Routes>
    </Router>
  </StrictMode>
);
