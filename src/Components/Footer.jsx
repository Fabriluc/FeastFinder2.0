import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer bg-footerbrown fixed bottom-0 left-0 w-full h-14">
      <div className="contact-container flex items-center justify-start absolute bottom-0 left-0 text-left w-full h-full">
        <ul className="list-none">
          <li>
            <a
              href="formulario.html"
              className="inline-block relative px-4 py-2 bg-lightpeach text-jet rounded-full font-semibold uppercase text-sm border-2 border-lightjet shadow-md hover:scale-105 transition-transform duration-300"
            >
              contáctenos
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
