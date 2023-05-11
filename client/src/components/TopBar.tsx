import React from "react";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

interface Props {
  title: string;
  path: string;
}

export default function TopBar({ title, path }: Props) {
  return (
    <div className="flex items-center justify-between bg-white dark:bg-ctm-dark p-4 px-8">
      <Link
        href={path}
        className="flex items-center space-x-2 rounded bg-gray-100 py-1 px-2 text-slate-500 shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
          />
        </svg>
        <span>Volver</span>
      </Link>
      <div className="text-lg font-bold text-ctm-dark dark:text-white">
        {title}
      </div>
      <div className="flex items-center">
        <DarkModeSwitch />
      </div>
    </div>
  );
}
