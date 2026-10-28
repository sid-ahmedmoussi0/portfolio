import React from "react";
import "./index.css";
import {Route, Routes} from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Project from "./routes/Project/Project";
import Contact from "./routes/Contact/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/mes-projet" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Analytics />
  </>
  );
}

export default App;
