import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/contexts/AuthContext";

export default function Footer() {
  const { session, isAuthenticated } = useAuth();
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
            {isAuthenticated && session?.user.role === "admin" && (
              <li>
                <Link
                  href="/admin-manual"
                  className="mr-4 hover:underline md:mr-6"
                >
                  Manual de administrador
                </Link>
              </li>
            )}
            {isAuthenticated && session?.user.role === "user" && (
              <li>
                <Link
                  href="/user-manual"
                  className="mr-4 hover:underline md:mr-6"
                >
                  Manual de usuario
                </Link>
              </li>
            )}
            <li>
              <Link
                href="privacy-policy"
                className="mr-4 hover:underline md:mr-6"
              >
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link href="/licensing" className="hover:underline">
                Licencia de software
              </Link>
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
