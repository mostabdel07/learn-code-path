import React from "react";
import Image from "next/image";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";

export default function About() {
  return (
    <section id="about" className="bg-ctm-black">
      <div className="container gap-16 items-center py-8 px-4 mx-auto lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="order-last font-light space-y-12 text-white sm:text-lg">
          <div>
            <h2 className="text-xl md:text-3xl font-semibold capitalize lg:text-4xl text-white">
              ¡Bienvenidos a nuestra plataforma de cursos en línea!
            </h2>

            <div className="mt-2">
              <span className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
              <span className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
              <span className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
            </div>
          </div>
          <p className="mb-4">
            Somos dos programadores full stack apasionados por la educación.
            Únete a nosotros para dominar habilidades en demanda con nuestros
            cursos de alta calidad. <br /> Nuestra plataforma ofrece un
            aprendizaje práctico con proyectos prácticos. Con una interfaz fácil
            de usar, puede navegar fácilmente, realizar un seguimiento del
            progreso y conectarse con otros estudiantes en formaciones
            presenciales. Mejora tus habilidades hoy mismo y desbloquea nuevas
            oportunidades.
          </p>
          <div className="grid gap-4 mb-8 md:mb-12 md:grid-cols-2">
            <figure className="flex flex-col items-center justify-center p-8 text-center rounded-lg bg-gray-900">
              <figcaption className="flex items-center justify-center space-x-4">
                <Image
                  className="grayscale rounded-full w-9 h-9"
                  src="/images/profile-mostafa.jpg"
                  alt="victor picture"
                  width="0"
                  height="0"
                  sizes="100vw"
                />
                <div className="space-y-1 font-medium text-white text-left">
                  <div>Mostafa Abdel-illah</div>
                  <div className="text-sm text-gray-400">
                    Full-stack Developer
                  </div>
                  <div>
                    <ul className="flex space-x-4">
                      <li>
                        <a
                          href="https://www.linkedin.com/in/mostafabdelillah/"
                          className="text-gray-500 hover:text-white"
                          target="blank_"
                        >
                          <RiLinkedinFill className="w-4 h-4" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/mostabdel07"
                          className="text-gray-500 hover:text-white"
                          target="blank_"
                        >
                          <RiGithubFill className="w-4 h-4" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:mostabdel07@gmail.com"
                          className="text-gray-500 hover:text-white"
                        >
                          <AiFillMessage className="w-4 h-4" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center rounded-lg bg-gray-900">
              <figcaption className="flex items-center justify-center space-x-4">
                <Image
                  className="grayscale rounded-full w-9 h-9"
                  src="/images/profile-victor.jpg"
                  alt="victor picture"
                  width="0"
                  height="0"
                  sizes="100vw"
                />
                <div className="space-y-1 font-medium text-white text-left">
                  <div>Victor Muñoz</div>
                  <div className="text-sm text-gray-400">
                    Full-stack Developer
                  </div>
                  <div>
                    <ul className="flex space-x-4">
                      <li>
                        <a
                          href="https://www.linkedin.com/in/v%C3%ADctor-mu%C3%B1oz-calzada-b52681256"
                          className="text-gray-500 hover:text-white"
                          target="blank_"
                        >
                          <RiLinkedinFill className="w-4 h-4" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/VictorMunozCalzada"
                          className="text-gray-500 hover:text-white"
                          target="blank_"
                        >
                          <RiGithubFill className="w-4 h-4" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:victor19944991@gmail.com"
                          className="text-gray-500 hover:text-white"
                        >
                          <AiFillMessage className="w-4 h-4" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>

          <p>
            <Link
              href="/courses"
              className="text-gray-400 transition-all duration-500 hover:text-white"
            >
              Empieza a aprender ahora {""}
              <ArrowLongRightIcon className="inline-block h-6 w-6" />
            </Link>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-full rounded-lg"
            src="/images/knowledge.jpg"
            alt="knowledge"
            width="0"
            height="0"
            sizes="100vw"
          />
          <Image
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="/images/team-working.jpg"
            alt="team-working"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
