import React from "react";
import Hero from "../Hero";

function Header() {
  return (
    <section id="header" className="relative w-full min-h-vh bg-gray-100">
      <video
        src="/videos/bg-video.mp4"
        autoPlay
        loop
        playsInline
        muted
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      ></video>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b bg-black opacity-30" />
      <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-900" />
      <Hero />
    </section>
  );
}

export default Header;
