import Caroussel from "@/components/Caroussel";
import React from "react";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-8 lg:py-16 bg-ctm-light dark:bg-ctm-black"
    >
      <Caroussel />
    </section>
  );
}
