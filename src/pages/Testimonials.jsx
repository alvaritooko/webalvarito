import React from "react";

const Testimonials = () => {
  return (
    <main className="pt-24 pb-12 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Aquí van los testimonios de clientes o usuarios. Puedes usar un slider o
        simplemente tarjetas con la foto, nombre y comentario.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-800 italic mb-4">
            “Excelente trabajo, muy profesionales y cumplidos con los tiempos.”
          </p>
          <p className="text-gray-700 font-semibold">— Juan Pérez</p>
        </div>
        {/* Más tarjetas de testimonios */}
      </div>
    </main>
  );
};

export default Testimonials;
