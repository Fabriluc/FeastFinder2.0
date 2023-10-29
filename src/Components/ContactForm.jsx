import React from "react";

const ContactForm = () => {
  return (
    <section className="form-contact flex items-center justify-center h-screen bg-primary text-white">
      <form className="contact p-4 w-1/2" action="" method="POST">
        <label className="font-bold" htmlFor="nombres" unselectable="on">
          Nombres
        </label>
        <input
          className="block w-full mb-5 border-b-2 border-headerred text-white outline-none bg-secondary"
          type="text"
          name="nombres"
          id="nombres"
        />

        <label className="font-bold" htmlFor="correo" unselectable="on">
          Correo
        </label>
        <input
          className="block w-full mb-5 border-b-2 border-headerred text-white outline-none bg-secondary"
          type="text"
          name="correo"
          id="correo"
        />

        <label className="font-bold" htmlFor="nombres" unselectable="on">
          Celular
        </label>
        <input
          className="block w-full mb-5 border-b-2 border-headerred text-white outline-none bg-secondary"
          type="text"
          name="celular"
          id="celular"
        />

        <label className="font-bold" htmlFor="mensaje" unselectable="on">
          Mensaje
        </label>
        <textarea
          className="block w-full mb-5 border-b-2 border-headerred text-white outline-none min-h-28 bg-secondary"
          name="mensaje"
          id="mensaje"
        ></textarea>

        <a className="input bg-headerred text-white text-center font-bold py-2 px-4 rounded-full block mx-auto w-32">
          Enviar
        </a>
      </form>
    </section>
  );
};

export default ContactForm;
