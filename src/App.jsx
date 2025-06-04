import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      {/* Reflejo superior global, por sobre el navbar */}
      <img
        src="/fondo1.png"
        alt="Reflejo superior"
        className="fixed top-0 left-0 w-full object-cover object-top z-50 pointer-events-none"
        style={{ maxHeight: "350px" }}
      />
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
