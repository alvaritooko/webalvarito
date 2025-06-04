import React from "react";

const Projects = () => {
  return (
    <main className="pt-24 pb-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Aquí va la lista o galería de proyectos. Puedes crear tarjetas con
        Tailwind para mostrar miniaturas, títulos y descripciones breves de cada
        proyecto.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="/assets/proyecto1.png"
            alt="Proyecto 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Proyecto 1</h3>
            <p className="text-gray-600 text-sm">
              Descripción breve del proyecto 1.
            </p>
          </div>
        </div>
        {/* Agrega más tarjetas de proyecto aquí */}
      </div>
    </main>
  );
};

export default Projects;
