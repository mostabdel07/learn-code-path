import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="container min-h-screen relative flex flex-col items-center justify-end px-6 py-24 mx-auto">
      <div className="">
        <h1 className="mb-1 font-orbitron text-lg text-gray-400 sm:text-2xl md:text-3xl lg:text-4xl font-light text-center uppercase">
          Descubre <br />
          <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
            nuevas oportunidades
          </span>
        </h1>
      </div>
      <div className="flex flex-col">
        <a href="#about">
          <ChevronDownIcon className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 text-gray-400 hover:text-white animate-bounce mx-auto mt-4" />
        </a>
      </div>
    </div>
  );
}
