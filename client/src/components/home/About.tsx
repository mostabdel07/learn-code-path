import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-ctm-black ">
      <div className="container gap-16 items-center py-8 px-4 mx-auto lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-white sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            Sobre Nosotros
          </h2>
          <p className="mb-4">
            Somos estrategas, diseñadores y desarrolladores. Innovadores y
            problema. solucionadores Lo suficientemente pequeño para ser simple
            y rápido, pero lo suficientemente grande para entregue el alcance
            que desea al ritmo que necesita. Lo suficientemente pequeño para ser
            simple y rápido, pero lo suficientemente grande como para ofrecer el
            alcance que desea en el ritmo que necesitas.
          </p>
          <p>
            Somos estrategas, diseñadores y desarrolladores. Innovadores y
            problema. solucionadores Lo suficientemente pequeño para ser simple
            y rápido.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
}
