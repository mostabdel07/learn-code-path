import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-ctm-black ">
      <div className="container gap-16 items-center py-8 px-4 mx-auto lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
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
        <div className="font-light space-y-12 text-white sm:text-lg">
          <div>
            <h2 className="text-3xl font-semibold capitalize lg:text-4xl text-white">
              About Us
            </h2>

            <div className="mt-2">
              <span className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
              <span className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
              <span className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
            </div>
          </div>
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
      </div>
    </section>
  );
}
