import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="container min-h-screen relative flex flex-col items-center justify-end px-6 py-24 mx-auto">
      <div className="flex flex-col">
        <a
          href="#about"
          className="w-full md:text-6xl lg:text-7xl font-bold text-center text-white uppercase sm:text-5xl "
        >
          <ChevronDownIcon className="h-20 w-20 hover:text-blue-500 animate-bounce" />
        </a>
      </div>
    </div>
  );
}
