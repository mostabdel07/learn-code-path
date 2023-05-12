import DefaultLayout from "@/layouts/DefaultLayout";
import React from "react";
import Image from "next/image";

function bootcamps() {
  return (
    <DefaultLayout title="Bootcamps">
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <div className="relative w-full overflow-hidden bg-cover bg-no-repeat rounded-xl lg:mx-6 lg:w-1/2">
              <Image
                alt="bootcamp"
                width="0"
                height="0"
                sizes="100vw"
                className="transition duration-300 ease-in-out hover:scale-110 w-full  rounded-xl h-48 md:h-72 lg:h-96"
                // className="w-full lg:mx-6  rounded-xl h-72 lg:h-96"
                src="https://ts-production.imgix.net/images/088e397f-8949-42ad-a09c-631d611fd773.jpg?auto=compress,format&w=800&h=450"
              />
            </div>

            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
              <h3 className="block text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                Iniciación en la programación con Java y MySQL
              </h3>
              <div className="mt-4">
                <p className="text-sm text-white-500">
                  <span className="font-medium text-blue-500">
                    Fecha inicio:{" "}
                  </span>
                  22/05/2023
                </p>
                <p className="text-sm">
                  <span className="font-medium text-blue-500">Duración: </span>2
                  semana(s)
                </p>
                <p className="text-sm">
                  <span className="font-medium text-blue-500">
                    Localización:{" "}
                  </span>
                  Barcelona
                </p>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  <span className="font-medium text-blue-500">
                    Descripción:{" "}
                  </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                  tempore aliquid voluptate natus. Odio iste perspiciatis vitae
                  harum! Atque itaque officiis consequatur doloremque, fugit
                  odio est minus voluptates magni beatae! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Iure Lorem ipsum dolor sit,
                  amet consectetur adipisicing elit. Unde tempore aliquid
                  voluptate natus. Odio iste perspiciatis vitae harum! Atque
                  itaque officiis consequatur doloremque, fugit odio est minus
                  voluptates magni beatae! odio est minus voluptates magni
                  beatae! Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Iure Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit.
                </p>
              </div>

              <div className=" mt-6">
                <div className="flex items-center">
                  <img
                    className="object-cover object-center w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt=""
                  />

                  <div className="mx-4">
                    <h1 className="text-sm text-gray-700 dark:text-gray-200">
                      Amelia. Anderson
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Instructor, Lead Developer
                    </p>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-block text-md mt-4 font-semibold leading-6 text-gray-700 bg-gray-100 rounded-lg py-2 px-4 hover:bg-gray-500 hover:text-white"
                >
                  Inscribirse <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

export default bootcamps;
