import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="container min-h-screen relative flex flex-col items-start justify-center px-6 py-24 mx-auto">
      <div className="flex flex-col">
        <h1 className="w-full md:text-6xl lg:text-7xl font-bold text-center text-white uppercase sm:text-5xl ">
          Learn Code Path
        </h1>
        <h2 className="w-full max-w-2xl py-8 mx-auto text-xl font-light text-center text-white ">
          Descubre nuestro catálogo de cursos de las tecnologías más populares
          para los distintos niveles.
        </h2>
      </div>
    </div>
  );
}
