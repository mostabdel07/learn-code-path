import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Features() {
  return (
    <section id="features" className="py-16 bg-ctm-light overflow-hidden">
      <div className="container m-auto py-8 px-4 lg:py-16 text-gray-500 lg:px-6">
        <div>
          <h2 className="mt-4 text-2xl text-gray-900 font-bold md:text-4xl">
            Funcionalidades
          </h2>
        </div>
        <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3">
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
                <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-ctm-accent">
                  Cursos en línea
                </h5>
                <p className="text-sm text-gray-600">
                  Neque Dolor, fugiat non cum doloribus aperiam voluptates
                  nostrum.
                </p>
              </div>
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
                <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-ctm-accent">
                  Bootcamps presenciales
                </h5>
                <p className="text-sm text-gray-600">
                  Neque Dolor, fugiat non cum doloribus aperiam voluptates
                  nostrum.
                </p>
              </div>
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
                <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-ctm-accent">
                  Rutas de aprendizaje
                </h5>
                <p className="text-sm text-gray-600">
                  Neque Dolor, fugiat non cum doloribus aperiam voluptates
                  nostrum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
