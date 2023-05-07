import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="container relative flex flex-col items-center justify-between px-6 py-8 mx-auto">
      <div className="flex flex-col pt-8">
        <h1 className="w-full md:text-6xl lg:text-7xl font-light text-center text-white uppercase sm:text-5xl ">
          Learn Xtech
        </h1>
        <h2 className="w-full max-w-2xl py-8 mx-auto text-xl font-light text-center text-white ">
          Descubre nuestro catálogo de cursos de las tecnologías más populares
          para los distintos niveles.
        </h2>
        <div className="flex items-center justify-center mt-4">
          <Link
            href="/courses"
            className="px-4 py-2 mr-4 text-gray-900 dark:text-white uppercase rounded-lg bg-white dark:bg-gray-800 border-2 border-transparent text-md"
          >
            Ver cursos
          </Link>
          <Link
            href="/login"
            className="px-4 py-2 text-white uppercase rounded-lg bg-transparent border-2 border-white hover:bg-red-500 dark:hover:bg-indigo-950 hover:text-white text-md"
          >
            Log in
          </Link>
        </div>
      </div>
      <div className="relative block w-full mx-auto mt-6 md:mt-0">
        <img
          src="/images/road_to_knowledge.svg"
          className="max-w-xs m-auto md:max-w-2xl"
        />
      </div>
    </div>
  );
}
