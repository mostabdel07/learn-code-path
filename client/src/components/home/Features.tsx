import React from "react";
import Image from "next/image";

export default function Features() {
  return (
    <section className="bg-ctm-black pb-8">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center">
          <div className="w-full space-y-12 lg:w-1/2 ">
            <div>
              <h2 className="text-xl md:text-3xl font-semibold capitalize lg:text-4xl text-white">
                Características que nos hacen destacar de la competencia
              </h2>

              <div className="mt-2">
                <span className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                <span className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                <span className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
              </div>
            </div>

            <div className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h3 className="text-lg md:text-2xl font-semibold  capitalize text-white">
                  Consigue cursos online
                </h3>
                <p className="text-gray-200 font-semibold italic">
                  &#10077; Amplia tus conocimientos con nuestros cursos en línea
                  &#10078;
                </p>
                <p className="text-gray-300">
                  <span className="text-gray-200 font-semibold"></span> <br />
                  &#10687; Elija entre una amplia gama de cursos impartidos por
                  expertos del sector.
                  <br /> &#10687; Explore diversos temas, incluyendo tecnología,
                  informática, desarrollo personal y más. <br />
                </p>
              </div>
            </div>

            <div className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                  />
                </svg>
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h3 className="text-lg md:text-2xl font-semibold  capitalize text-white">
                  Suscripción a los bootcamps
                </h3>
                <p className="text-gray-200 font-semibold italic">
                  &#10077; Acelera tu aprendizaje con nuestros bootcamps
                  &#10078;
                </p>
                <p className="text-gray-300">
                  <br />
                  &#10687; Sumérgete en programas intensivos y prácticos de
                  bootcamps.
                  <br />
                  &#10687; Aprenda de instructores experimentados con
                  conocimientos del mundo real. <br />
                  &#10687; Domine los conocimientos más demandados en sólo unas
                  semanas.
                  <br />
                  &#10687; Únase a una comunidad de estudiantes y profesionales
                  del sector. <br />
                  &#10687; Benefíciese de oportunidades exclusivas para
                  establecer conexiones con el sector.
                </p>
              </div>
            </div>

            <div className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-lg md:text-2xl font-semibold capitalize text-white">
                  Interfaz fácil de usar
                </h1>
                <p className="text-gray-200 font-semibold italic">
                  &#10077; Experiencia de aprendizaje sin fisuras, en cualquier
                  momento y en cualquier lugar &#10078;
                </p>
                <p className="text-gray-300">
                  <br />
                  &#10687; Disfrute de una interfaz fácil de usar diseñada para
                  facilitar la navegación. <br />
                  &#10687; Acceda a su panel de control para seguir su progreso
                  y gestionar los cursos. <br />
                  &#10687; El diseño adaptable garantiza una experiencia fluida
                  en todos los dispositivos.
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
            <Image
              className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
              src="/images/learning.jpg"
              alt="learning"
              width="0"
              height="0"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
