import React from "react";
import Link from "next/link";
import DarkModeSwitch from "../utilities/DarkModeSwitch";
import { AiFillHome } from "react-icons/ai";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

interface Props {
  title: string;
  path: string;
}

export default function TopBar({ title, path }: Props) {
  return (
    <div className="flex items-center justify-between bg-ctm-dark p-4 px-8">
      <div className="">
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          {/* <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            /> */}
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            Learn Code Path
          </span>
        </a>
      </div>
      <div className="text-lg font-bold text-ctm-dark dark:text-white">
        {title}
      </div>
      <Link
        href={path}
        className="px-4 py-1.5 relative rounded-lg group text-white font-medium inline-block mr-6"
      >
        <span className="absolute top-0 left-0 w-full h-full rounded-lg opacity-50 filter blur-sm bg-gradient-to-br from-ctm-accent-dark to-ctm-accent"></span>
        <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-lg opacity-50 from-ctm-accent-dark to-ctm-accent"></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-lg shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-ctm-accent-dark to-ctm-accent"></span>
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-lg bg-gradient-to-br from-ctm-accent-dark to-ctm-accent"></span>
        <span className="relative">
          <ArrowLeftIcon className="h-4 w-4 inline-block mr-1" />
          Volver atrás
        </span>
      </Link>
    </div>
  );
}
