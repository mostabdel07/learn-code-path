import Caroussel from "@/components/Caroussel";
import React from "react";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-8 lg:py-16 bg-ctm-light dark:bg-ctm-black"
    >
      <div>
        <h2 className="text-center text-2xl text-gray-900 dark:text-white font-bold md:text-4xl">
          Galería
        </h2>
      </div>
      <Caroussel />
    </section>
  );
}
