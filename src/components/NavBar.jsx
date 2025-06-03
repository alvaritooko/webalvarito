// src/components/NavBar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

const NavBar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-20">
      <div className="backdrop-blur-md bg-[#0a1733]/70 border border-white/10 rounded-2xl px-10 py-3 flex items-center justify-center shadow-lg">
        <ul className="flex space-x-8 font-sans font-light text-base text-gray-200 tracking-wide relative">
          {navItems.map((item) => (
            <li key={item.path} className="flex flex-col items-center">
              <Link
                to={item.path}
                className={`px-2 py-1 transition rounded-md ${
                  isActive(item.path)
                    ? "text-white font-semibold"
                    : "hover:text-white text-gray-300"
                }`}
              >
                {item.label}
              </Link>
              {/* Indicador circular blanco bajo el ítem activo */}
              {isActive(item.path) && (
                <span className="mt-1 w-1.5 h-1.5 bg-white rounded-full block"></span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
