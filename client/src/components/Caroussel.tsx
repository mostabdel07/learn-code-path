import { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const images = [
  {
    src: "/images/slides/slide-1.png",
    alt: "Image 1",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/slides/slide-2.png",
    alt: "Image 2",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/slides/slide-3.png",
    alt: "Image 3",
    width: 1200,
    height: 800,
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative w-full h-42 sm:h-72 md:h-96">
      <div className="overflow-hidden h-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * (100 / images.length)}%)`,
            width: `${images.length * 100}%`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
              style={{ width: `${100 / images.length}%` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="responsive"
                width={image.width}
                height={image.height}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 sm:px-6">
        <button
          className="p-2 rounded-full bg-gray-800 text-white focus:outline-none"
          onClick={prevSlide}
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          className="p-2 rounded-full bg-gray-800 text-white focus:outline-none"
          onClick={nextSlide}
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute bottom-2 left-0 right-0 flex justify-center">
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full focus:outline-none transition-colors duration-300 ${
                index === activeIndex ? "bg-gray-800" : "bg-gray-400"
              }`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
