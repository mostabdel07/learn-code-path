import Caroussel from "@/components/Caroussel";
import React from "react";

const images = [
  "images/courses-view.png",
  "images/dashboard-view.png",
  "images/courses-view.png",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-8 lg:py-16 bg-ctm-light dark:bg-ctm-black"
    >
      <Caroussel images={images} />
    </section>
  );
}
