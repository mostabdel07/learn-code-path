import React from "react";

export default function Footer() {
  return (
    <footer className="bg-ctm-dark">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="#" className="flex items-center mb-4 sm:mb-0">
            {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            /> */}
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Learn Code Path
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Política de Privacidad
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licencia
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contáctanos
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-white sm:text-center ">
          © 2023{" "}
          <a href="#" className="hover:underline">
            Learn Code Path
          </a>
          . Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
}
