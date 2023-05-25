import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-ctm-dark shadow">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between mb-6 lg:mb-8">
          <Link href="/" className="flex items-center mb-4 sm:mb-0">
            <Image
              src="/images/logo.png"
              className="block mx-auto"
              alt="logo"
              width="115"
              height="30"
              sizes="100vw"
            />
          </Link>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
            <li>
              <a href="/user-manual" className="mr-4 hover:underline md:mr-6">
                Manual de usuario
              </a>
            </li>
            <li>
              <a href="privacy-policy" className="mr-4 hover:underline md:mr-6">
                Política de privacidad
              </a>
            </li>
            <li>
              <a href="/licensing" className="hover:underline">
                Licencia de software
              </a>
            </li>
          </ul>
        </div>

        <span className="block text-sm text-white text-center ">
          © {currentYear} Todos los derechos reservados.{" "}
          <Link
            href="https://www.learncodepath.tech/"
            className="hover:underline"
          >
            learncodepath.tech
          </Link>
        </span>
      </div>
    </footer>
  );
}
