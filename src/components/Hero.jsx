import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center text-center text-white"
      style={{
        backgroundColor: "#1D2029",
      }}
    >
      {/* Imagen de fondo superpuesta, reflejo fijo arriba */}
      <img
        src="/fondo1.png"
        alt="Fondo decorativo"
        className="fixed top-0 left-0 w-full object-cover object-top z-0"
        style={{ pointerEvents: "none" }}
      />

      {/* Overlay SVG de cuadrícula */}
      <svg
        className="absolute inset-0 w-full h-full z-10"
        style={{ pointerEvents: "none" }}
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="grid"
            width="5%"
            height="5%"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="none"
              stroke="#fff"
              strokeWidth="0.3"
              opacity="0.08"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="relative z-20 max-w-3xl px-4">
        <p className="text-sm tracking-widest text-gray-300 mb-4">
          DYNAMIC WEB MAGIC WITH NEXT.JS
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Transforming Concepts into{" "}
          <span className="text-purple-400">Seamless User Experiences</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Hi, I'm John Doe, a Next.js Developer based in Russia
        </p>
        <Link
          to="/projects"
          className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 transition text-white font-semibold rounded-lg shadow-lg"
        >
          See my work &rarr;
        </Link>
      </div>
    </section>
  );
};

export default Hero;
