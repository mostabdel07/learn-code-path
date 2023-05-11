import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Features() {
  return (
    <section
      id="features"
      className="py-16 bg-ctm-light dark:bg-ctm-black overflow-hidden"
    >
      <div className="container m-auto py-8 px-4 lg:py-16 text-gray-500 lg:px-6">
        <div>
          <h2 className="mt-4 text-2xl text-gray-900 dark:text-white font-bold md:text-4xl">
            Funcionalidades
          </h2>
        </div>
        <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
          <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
            <div className="relative p-8 space-y-8">
              <img
                src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png"
                className="w-10"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
                  Cursos en línea
                </h5>
                <p className="text-sm text-gray-600">
                  Neque Dolor, fugiat non cum doloribus aperiam voluptates
                  nostrum.
                </p>
              </div>
              <a
                href="#"
                className="flex justify-between items-center group-hover:text-yellow-600"
              >
                <span className="text-sm">Leer más</span>
                <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <AiOutlineArrowRight />
                </span>
              </a>
            </div>
          </div>
          <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
            <div className="relative p-8 space-y-8">
              <img
                src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png"
                className="w-10"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
                  Formaciones presenciales
                </h5>
                <p className="text-sm text-gray-600">
                  Neque Dolor, fugiat non cum doloribus aperiam voluptates
                  nostrum.
                </p>
              </div>
              <a
                href="#"
                className="flex justify-between items-center group-hover:text-yellow-600"
              >
                <span className="text-sm">Leer más</span>
                <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <AiOutlineArrowRight />
                </span>
              </a>
            </div>
          </div>
          <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
            <div className="relative p-8 space-y-8">
              <img
                src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png"
                className="w-10"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
                  Rutas de aprendizaje
                </h5>
                <p className="text-sm text-gray-600">
                  Neque Dolor, fugiat non cum doloribus aperiam voluptates
                  nostrum.
                </p>
              </div>
              <a
                href="#"
                className="flex justify-between items-center group-hover:text-yellow-600"
              >
                <span className="text-sm">Leer más</span>
                <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <AiOutlineArrowRight />
                </span>
              </a>
            </div>
          </div>
          <div className="relative group bg-gray-100 transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
            <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90">
              <img
                src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/metal.png"
                className="w-10"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
                  Más funcionalidades
                </h5>
                <p className="text-sm text-gray-600">
                  Neque Dolor, fugiat non cum doloribus aperiam voluptates
                  nostrum.
                </p>
              </div>
              <a
                href="#"
                className="flex justify-between items-center group-hover:text-yellow-600"
              >
                <span className="text-sm">Leer más</span>
                <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <AiOutlineArrowRight />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
