import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

const Caroussel = () => {
  const slides = [
    {
      title: "Slide 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://example.com/slide1.jpg",
    },
    {
      title: "Slide 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://example.com/slide2.jpg",
    },
    // Add more slides as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (delta) => {
    if (delta < 0) {
      // Swiped to the left (next slide)
      const nextIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(nextIndex);
    } else if (delta > 0) {
      // Swiped to the right (previous slide)
      const prevIndex =
        currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(prevIndex);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe(-1),
    onSwipedRight: () => handleSwipe(1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="relative" {...swipeHandlers}>
      <div className="flex items-center justify-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? "z-10 opacity-100" : "z-0 opacity-0"
            } absolute transition-opacity duration-500 ease-in-out`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-screen w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-75 p-6">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500 ease-in-out`}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              {slide.title}
            </h2>
            <p className="text-white">{slide.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Caroussel;
