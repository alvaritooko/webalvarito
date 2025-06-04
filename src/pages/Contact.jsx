import React from "react";

const Contact = () => {
  return (
    <main className="pt-24 pb-12 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Si deseas contactarme, llena el siguiente formulario o escríbeme a mi
        correo electrónico:
      </p>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="name">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="ejemplo@correo.com"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="message">
            Mensaje
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Escribe tu mensaje aquí..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 transition text-white font-semibold rounded"
        >
          Enviar
        </button>
      </form>
    </main>
  );
};

export default Contact;
