import DefaultLayout from "@/layouts/DefaultLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import axios from "axios";
import { useState } from "react";
import SlideOver from "@/components/utilities/SlideOver";
import Modal from "@/components/utilities/Modal";
import { useAuth } from "@/contexts/auth";
import withAuth from "@/components/withAuth";

interface Course {
  id: number;
  title: string;
  headline: string;
  instructor: string;
  price: string;
  img: string;
  created_at: string;
  updated_at: string;
}

interface CoursePageProps {
  course: Course;
}

export const getServerSideProps: GetServerSideProps<CoursePageProps> = async (
  context
) => {
  const { id } = context.params ?? {};
  const token = context.req.headers.cookie?.replace(
    /(?:(?:^|.*;\s*)authToken\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  const apiURL = process.env.API_ENDPOINT;

  if (!id) {
    return {
      notFound: true,
    };
  }

  try {
    const res = await axios.get(`${apiURL}/courses/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 404) {
      return {
        notFound: true,
      };
    }

    const course = res.data;

    return {
      props: {
        course,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const CoursePage = ({ course }: CoursePageProps) => {
  const router = useRouter();
  const { token } = useAuth();

  const apiURL = process.env.API_ENDPOINT;

  const [openSlideOver, setOpenSlideOver] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  function handleOpenSlideOver() {
    setOpenSlideOver(true);
  }

  function handleCloseSlideOver() {
    setOpenSlideOver(false);
  }

  function handleCloseModalEdit() {
    setOpenModalEdit(false);
  }

  function handleCloseModalDelete() {
    setOpenModalDelete(false);
  }

  if (!course || router.isFallback) {
    return <div>Loading...</div>;
  }

  async function handleDelete(id: number) {
    console.log(id);
    console.log(token);
    try {
      const response = await axios.delete(`${apiURL}/courses/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DefaultLayout title="Gestionar curso">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              src={course.img}
              alt="course"
              width="0"
              height="0"
              sizes="100vw"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {course.title}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">{course.headline}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {parseFloat(course.price) == 0.0 ? "Free" : course.price}
                </span>
                <button
                  className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
                  // onClick={handleOpenSlideOver}
                >
                  Editar
                </button>
                <button
                  className="ml-4 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
                  onClick={() => setOpenModalDelete(true)}
                >
                  Eliminar
                </button>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Añadir
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
                <SlideOver
                  openSlideOver={openSlideOver}
                  onClose={handleCloseSlideOver}
                >
                  <form className="mb-6">
                    <button
                      type="button"
                      className="text-white bg-green-700 hover:bg-green-800 w-full focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800 block"
                      // onClick={handleSave}
                    >
                      Guardar
                    </button>
                  </form>
                </SlideOver>
                {/* Modal aviso guardar */}
                <Modal
                  title="Aviso"
                  openModal={openModalEdit}
                  onClose={handleCloseModalEdit}
                >
                  <div className="bg-white px-4 pb-4 sm:p-6 sm:pb-8 sm:mt-0">
                    <p className="text-center sm:text-left">
                      ¡Se han guardado los cambios correctamente!
                    </p>
                  </div>
                </Modal>
                {/* Modal aviso eliminar */}
                <Modal
                  title="Eliminar curso"
                  openModal={openModalDelete}
                  onClose={handleCloseModalDelete}
                >
                  <div className="bg-white px-4 pb-4 sm:p-6 sm:pb-4 sm:mt-0">
                    <p className="text-center sm:text-left">
                      Estas seguro de eliminar el curso &quot;
                      <span className="font-bold italic">{course.title}</span>
                      &quot; definitivamente.
                    </p>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={() => handleDelete(course.id)}
                    >
                      Aceptar
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={handleCloseModalDelete}
                    >
                      Cancelar
                    </button>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default withAuth(CoursePage);
