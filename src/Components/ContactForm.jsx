import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful form submission
          alert("Formulario enviado correctamente");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          // Redirect to the index page
          window.location.href = "/";
        } else {
          // Handle form submission error
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          alert("Error de formulario");
        }
      })
      .catch((error) => {
        // Handle fetch error
        console.error(error);
      });
  };

  return (
    <section className="flex justify-center align-center w-full">
      <div className="form-contact flex items-center justify-center w-1/2 py-40 bg-primary text-white">
        <form className="contact p-4 w-1/2" onSubmit={handleSubmit}>
          <label className="font-bold" htmlFor="name" unselectable="on">
            Nombres
          </label>
          <input
            className="block w-full mb-5 border-b-2 border-headerred text-white outline-none bg-secondary"
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <label className="font-bold" htmlFor="email" unselectable="on">
            Correo
          </label>
          <input
            className="block w-full mb-5 border-b-2 border-headerred text-white outline-none bg-secondary"
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <label className="font-bold" htmlFor="phone" unselectable="on">
            Celular
          </label>
          <input
            className="block w-full mb-5 border-b-2 border-headerred text-white outline-none bg-secondary"
            type="tel"
            pattern="[0-9]{8,12}"
            name="phone"
            id="phone"
            required
            value={formData.phone}
            onChange={handleChange}
          />

          <label className="font-bold" htmlFor="message" unselectable="on">
            Mensaje
          </label>
          <textarea
            className="block w-full mb-5 border-b-2 border-headerred text-white outline-none min-h-28 bg-secondary"
            name="message"
            id="message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button
            className="input bg-headerred text-white text-center font-bold py-2 px-4 rounded-full block mx-auto w-32 focus:bg-active hover:bg-hover"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
